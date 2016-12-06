const express = require('express');
const router = express.Router();
const debug = require('debug')('server:api');

debug('init');
router.use('/items', require('./items'));
router.use('/itemCategories', require('./itemCategories'));
router.use('/nodeSteps', require('./nodeSteps'));
router.use('/stats', require('./stats'));

module.exports = router;
