const config = require('../config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
require('debug')('app:build:webpack');

const webpackConfig = {
    devtool: 'source-map',
    entry: {
        app: [ 
            path.resolve(config.paths.client, 'index.jsx') 
        ]
    },
    output: {
        path: config.paths.dist,
        filename: 'bundle.js'
    },
    resolve: {
        root: config.paths.client,
        extensions: [ '', '.js', '.jsx', '.json', '.css' ]
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: config.paths.client,
                query: {
                    presets: [ 'es2015', 'react', 'stage-3' ]
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&camelCase',
                include: config.paths.client
            }, { 
                test: /\.md$/, 
                loader: 'html!markdown?gfm=false' 
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: './client/favicon.png',
            background: '#f0ad4e',
            title: 'Destiny Weapon Calculator'
        }),   
        new HtmlWebpackPlugin({
            template: path.resolve(config.paths.client, '_index.html')
        })
    ]
};

if(config.env.NODE_ENV === 'development') {
    const publicPath = `http://${config.server.host}:${config.server.port}/`;
    
    webpackConfig.entry.app.push(
        `webpack-hot-middleware/client?${publicPath}__webpack_hmr&reload=true`
    );
    
    webpackConfig.output.publicPath = publicPath;
    
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
} else {
    webpackConfig.output.publicPath = '/';
}

module.exports = webpackConfig;