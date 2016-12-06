const express = require('express');
const webpack = require('webpack');
const debug = require('debug')('server');

const config = require('../config');
const createData = require('./data');

const app = express();
app.use('/api', require('./api'));

app.use(require('connect-history-api-fallback')());

if(config.env.NODE_ENV === 'development') {
    const webpackConfig = require('../build/webpack.config.js');
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, { 
        publicPath: webpackConfig.output.publicPath,
        contentBase: 'client',
        noInfo: true,
        hot: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));
} else {
    app.use(express.static(config.paths.dist));
}

module.exports = {
    listen: (port) => {
        createData()
            .then(() => { 
                app.listen(port, () => debug(`Server listening at: ${config.server.host}:${port}`));
            });
    }
};
