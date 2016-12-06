require('json5/lib/require');

const _ = require('underscore');
const express = require('express');
const router = express.Router();
const debug = require('debug')('server:api:nodeSteps');

router.get('/', (request, response) => {
    debug('GET');
    
    const nodeSteps = require('../../../tmp/nodeSteps');
    const modifiers = require('../../data/modifiers');

    response.setHeader('Content-Type', 'application/json');
    response.status(200);

    response.send(
        JSON.stringify(
            _.mapObject(
                nodeSteps, 
                step => Object.assign({}, step, { modifiers: modifiers[step.nodeStepHash] }))
        )
    );
});

module.exports = router;