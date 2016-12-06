const path = require('path');
const ip = require('ip');
require('debug')('app:config');

module.exports = {
    env: {
        NODE_ENV: process.env.NODE_ENV || 'development',
        BUNGIE_API_KEY: process.env.BUNGIE_API_KEY
    },
    paths: {
        client: path.resolve(__dirname, '..', 'client'),
        dist: path.resolve(__dirname, '..', 'dist')
    },
    server: {
        host: ip.address(),
        port: process.env.PORT || 3000
    }
};