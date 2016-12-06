const Promise = require('bluebird');
const rimraf = Promise.promisify(require('rimraf'));
const fs = Promise.promisifyAll(require('fs'));
const _ = require('underscore');
const jsonfile = require('jsonfile');
const log = require('log');
const debug = require('debug')('server:data');

const config = require('../../config');

const bungie = require('./bungie');
const api = bungie.api(config.env.BUNGIE_API_KEY);
const utils = bungie.utils;

const tables = [
    'InventoryItem',
    'ItemCategory',
    'Stat',
    'TalentGrid'
];

const filterItemCategoryHashes = itemCategoryHash => itemCategoryHash > 4 && itemCategoryHash < 15;

const filterItems = (item) => {
    return (item.tierType == utils.enums.TierType.SUPERIOR || item.tierType == utils.enums.TierType.EXOTIC) 
        && _.contains(item.itemCategoryHashes, utils.enums.ItemCategory.WEAPON) && !_.contains(item.itemCategoryHashes, utils.enums.ItemCategory.SWORD)
        && item.sources && item.sources[0].minLevelRequired === 40;
};

const filterNodeSteps = (step) => {
    return step.nodeStepHash != 0 // Remove unknown nodes, e.g. last column on The Last Word
        && !step.nodeStepName.includes('Chroma') // Remove Chroma
        && !_.has(step, 'socketReplacements'); // Remove Ornaments
};

const buildNodeStepGrid = (talentGrid) => {
    return _.chain(talentGrid.nodes)
        .filter(node => node.column > 0)
        .map(
            node => _.chain(node.steps)
                .uniq(step => step.nodeStepHash)
                .filter(filterNodeSteps)
                .map(step => _.pick(step, 'nodeStepHash'))
                .map(step => Object.assign({}, step, { column: node.column - 1 }))
                .value()
        )
        .flatten()
        .reduce((result, step) => {
            result[step.column] = result[step.column] || [];
            result[step.column].push(step.nodeStepHash);
            return result;
        }, [])
        .without(undefined) // Remove the now empty Chroma columns
        .value();
};

const createData = () => {
    return rimraf('tmp')
        .then(() => fs.mkdirAsync('tmp'))
        .then(api.getManifest)
        .then(metadata => utils.downloadManifest(metadata.mobileWorldContentPaths.en, 'tmp'))
        .then(manifest => utils.getDefinitions(manifest, tables))
        .then(defs => {
            // Item Categories
            debug('Parsing itemCategories');

            const itemCategories = _.chain(defs.ItemCategory)
                .pick(category => filterItemCategoryHashes(category.itemCategoryHash))
                .mapObject(category => _.pick(category, 'itemCategoryHash', 'title'))
                .value();

            // Items
            debug('Parsing items');

            const items = _.chain(defs.InventoryItem)
                .pick(filterItems)
                .mapObject(item => _.chain(item)
                    .keys()
                    .reduce((result, key) => {
                        if(key === 'itemCategoryHashes') {
                            return Object.assign({}, result, { 
                                itemCategoryHash: _.chain(item.itemCategoryHashes)
                                    .filter(filterItemCategoryHashes)
                                    .first()
                                    .value()
                            });
                        } else if(key === 'talentGridHash') {
                            return Object.assign({}, result, { 
                                nodeStepGrid: buildNodeStepGrid(defs.TalentGrid[item.talentGridHash]) 
                            });
                        } else {
                            return Object.assign({}, result, {
                                [key]: item[key] 
                            });
                        }
                    }, {})
                    .pick('itemHash', 'itemName', 'itemDescription', 'icon', 'itemCategoryHash', 'stats', 'nodeStepGrid')
                    .value()
                )
                .value();

            // Node Steps
            debug('Parsing nodeSteps');

            const talentGridHashes = _.chain(defs.InventoryItem)
                .pick(filterItems)
                .values()
                .map(item => item.talentGridHash)
                .value();

            const nodeSteps = _.chain(defs.TalentGrid)
                .pick(talentGrid => _.contains(talentGridHashes, talentGrid.gridHash))
                .values()
                .map(grid => grid.nodes)
                .flatten()
                .pluck('steps')
                .flatten()
                .uniq(step => step.nodeStepHash)
                .filter(filterNodeSteps)
                .map(step => _.pick(step, 'nodeStepHash', 'nodeStepName', 'nodeStepDescription', 'icon'))
                .reduce((result, step) => Object.assign({}, result, { [step.nodeStepHash]: step }), {})
                .value();

            // Stats
            debug('Parsing stats');

            const stats = _.mapObject(defs.Stat, stat => _.pick(stat, 'statHash', 'statName', 'statDescription'));

            // Write files
            debug('Write files to tmp');
            jsonfile.writeFileSync('tmp/items.json', items, { spaces: 4 });
            jsonfile.writeFileSync('tmp/itemCategories.json', itemCategories, { spaces: 4 });
            jsonfile.writeFileSync('tmp/nodeSteps.json', nodeSteps, { spaces: 4 });
            jsonfile.writeFileSync('tmp/stats.json', stats, { spaces: 4 });
        })
        .catch(error => log.error(error));
};

module.exports = createData;