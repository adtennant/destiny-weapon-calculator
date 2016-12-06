import { createSelector } from 'reselect';
import { getItemsByHash, getNodeStepsByHash, getItemsSortedByName, getItemCategoriesByHash, getDisplayedStats } from 'modules/entities';

const getSelectedItemHash = (state) => state.calculator.selectedItemHash;
const getSelectedNodeStepHashes = (state) => state.calculator.selectedNodeStepHashes;

const getSelectedItem = createSelector(
    [ getSelectedItemHash, getItemsByHash ],
    (selectedItemHash, itemsByHash) => {
        return itemsByHash[selectedItemHash] || { stats: {}, nodeStepGrid: [] };
    }
);

const getSelectedNodeSteps = createSelector(
    [ getSelectedNodeStepHashes, getNodeStepsByHash ],
    (selectedNodeStepHashes, nodeStepsByHash) => {
        return selectedNodeStepHashes.map(nodeStepHash => nodeStepsByHash[nodeStepHash] || {});
    }
);

export const getItemSelectOptions = createSelector(
    [ getItemsSortedByName ],
    (itemsByName) => itemsByName.map(item => ({ value: item.itemHash.toString(), label: item.itemName }))
);

export const getNodeStepSelectOptions = createSelector(
    [ getSelectedItem, getNodeStepsByHash ],
    (selectedItem, nodeStepsByHash) => selectedItem.nodeStepGrid.map(column => ([ 
        { value: '0', label: 'None' }, 
        ...column.map(stepHash => ({ value: stepHash.toString(), label: nodeStepsByHash[stepHash].nodeStepName }))
            .sort((a, b) => a.label.localeCompare(b.label))
    ]))
);

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

function round(number) {
    const floor = Math.floor(number);

    if(number - floor > 0.5) {
        return Math.ceil(number);
    } else {
        return floor;
    }
}

const calculateStats = (item, nodeSteps, multipliers) => {
    const modifiers = nodeSteps.reduce((result, nodeStep) => {
        Object.keys(nodeStep.modifiers || {}).forEach(statHash => {
            result[statHash] = result[statHash] || 0;
            result[statHash] += nodeStep.modifiers[statHash];
        });
        
        return result;
    }, {});

    return Object.keys(item.stats).reduce((result, statHash) => {
        const { value, minimum, maximum } = item.stats[statHash];
        const scaledModifier = (modifiers[statHash] || 0) * (multipliers[statHash] || 1);

        result[statHash] = {
            value: round(clamp(value + scaledModifier, minimum, maximum)),
            minimum: minimum,
            maximum: maximum
        };

        return result;
    }, {});
};

export const getResults = createSelector(
    [ getSelectedItem, getSelectedNodeSteps, getItemCategoriesByHash, getDisplayedStats ],
    (selectedItem, selectedNodeSteps, itemCategoriesByHash, displayedStats) => {
        const result = calculateStats(selectedItem, selectedNodeSteps, itemCategoriesByHash[selectedItem.itemCategoryHash].multipliers);

        return displayedStats
            .filter(stat => !!result[stat.statHash]) // Filter out any stats this weapon doesn't have
            .map(stat => Object.assign({}, result[stat.statHash], { statHash: stat.statHash, statName: stat.statName }));
    }
);