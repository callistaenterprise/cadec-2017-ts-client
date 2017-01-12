var webpack = require('webpack');
var path = require("path");
const loadersConfig = require('./webpack.loaders.js');
const pluginsConfig = require('./webpack.plugins.js');

var config = {
    //context: __dirname + '/app',
    entry: {
        app: './app/app',
        vendor: [
            'jquery',
            'angular',
            'angular-ui-router',
            'angular-material',
            'angular-messages'
        ]
    },
    output: {
        path: 'app',
        filename: 'bundle.[name].js',
        publicPath: '/'
    },
    devtool: '#inline-source-map',
    devServer: {
        stats: 'minimal',
        contentBase: './app',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],
    module: {
        preLoaders: [
            {test: /\.ts$/, loader: 'tslint'},
            { test: /\.js$/, loader: 'source-map-loader' }
        ],
        loaders: loadersConfig
    },
    tslint: {
        configuration: require('./tslint.json'),
        emitErrors: true,
        failOnHint: true
    },
    plugins: pluginsConfig
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;
