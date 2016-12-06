const fetch = require('isomorphic-fetch');
const unzip = require('unzip');
const fs = require('fs');
const sqlite = require('sqlite');
const Promise = require('bluebird');
const debug = require('debug')('server:data:bungie:utils');

const fetchManifest = (manifestUrl) => {  
    return fetch('https://www.bungie.net/' + manifestUrl)
        .then(response => response.body);
};

const unzipManifest = (stream, dir) => {
    return new Promise(resolve => {
        stream.pipe(unzip.Parse())
            .on('entry', function (entry) {
                entry.pipe(fs.createWriteStream(dir + '/manifest.db'))

                .on('close', () => {
                    resolve(dir + '/manifest.db');
                });
            });   
    });
};

const downloadManifest = (manifestUrl, dir) => { 
    debug('downloadManifest', manifestUrl, dir);

    return fetchManifest(manifestUrl)
        .then((stream) => unzipManifest(stream, dir));
};

const getAllRecords = (db, table) => {
    return db.all(`SELECT json FROM Destiny${table}Definition`)
        .then(rows => rows.map(row => JSON.parse(row.json)))
        .then(defs => defs.reduce((result, def) => (Object.assign({}, result, { [def.hash]: def })), {}));
};

const getDefinitions = (manifestPath, tables) => {
    debug('getDefinitions', manifestPath, tables);

    const defs = {};

    return sqlite.open(manifestPath, { Promise })
        .then(db => Promise.all(tables.map(table => getAllRecords(db, table).then(records => { defs[table] = records; })))
        .then(() => defs));
};

const enums = {
    TierType: {
        SUPERIOR: 5,
        EXOTIC: 6
    },
    ItemCategory: {
        WEAPON: 1,
        SWORD: 54
    }
};

module.exports =  {
    downloadManifest,
    getDefinitions,
    enums
};