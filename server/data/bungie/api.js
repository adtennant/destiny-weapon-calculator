const fetch = require('isomorphic-fetch');
const debug = require('debug')('server:data:bungie:api');

module.exports = (apiKey) => {
    const bungieFetch = (endpoint) => {
        debug('bungieFetch', endpoint);
        
        return fetch(endpoint, { headers: { 'X-API-Key': apiKey } });
    };

    const getManifest = () => bungieFetch('https://www.bungie.net/Platform/Destiny/Manifest/')
        .then(response => response.json())
        .then(json => json.Response);

    return {
        getManifest
    };
};
