const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader!ts-loader'
    }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
    }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
    }, {
        test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    }
];
