const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, './dist'),
        open: true,
        hot: true,
        quiet: true,
        port: 8000,
    },
})