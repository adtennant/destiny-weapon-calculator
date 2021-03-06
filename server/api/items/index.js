const express = require('express');
const router = express.Router();
const debug = require('debug')('server:api:items');

router.get('/', (request, response) => {
    debug('GET');
    
    response.setHeader('Content-Type', 'application/json');
    response.status(200);
    response.send(JSON.stringify(require('../../../tmp/items')));
});

module.exports = router;