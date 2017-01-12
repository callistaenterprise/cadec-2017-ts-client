const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.optimize.CommonsChunkPlugin({
        names: 'vendor',
        minChunks: 2,
        chunks: ['vendor', 'app']
    }),
    new HtmlWebpackPlugin({
        template: 'app/index.html',
        chunks: ['vendor', 'app']
    })
];
