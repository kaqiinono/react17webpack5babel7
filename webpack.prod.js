const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
// const smp = new SpeedMeasurePlugin()

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            // 与 webpackOptions.output 中的选项相似
            // 所有的选项都是可选的
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
    ],
})
