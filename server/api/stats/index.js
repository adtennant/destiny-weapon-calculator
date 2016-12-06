const express = require('express');
const router = express.Router();
const debug = require('debug')('server:api:stats');

router.get('/', (request, response) => {
    debug('GET');
    
    response.setHeader('Content-Type', 'application/json');
    response.status(200);
    response.send(JSON.stringify(require('../../../tmp/stats')));
});

module.exports = router;