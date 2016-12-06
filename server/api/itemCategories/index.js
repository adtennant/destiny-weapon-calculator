require('json5/lib/require');

const _ = require('underscore');
const express = require('express');
const router = express.Router();
const debug = require('debug')('server:api:itemCategories');

router.get('/', (request, response) => {
    debug('GET');
    
    const itemCategories = require('../../../tmp/itemCategories');
    const multipliers = require('../../data/multipliers');

    response.setHeader('Content-Type', 'application/json');
    response.status(200);

    response.send(
        JSON.stringify(
            _.mapObject(
                itemCategories, 
                category => Object.assign({}, category, { multipliers: multipliers[category.itemCategoryHash] }))
        )
    );
});

module.exports = router;