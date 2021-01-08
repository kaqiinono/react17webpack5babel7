const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './entry/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.NODE_ENV,
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      minify: {
        // 压缩html
        collapseWhitespace: true, // 压缩空白
        removeComments: true, // 去除注释
      },
    }),
    new CleanWebpackPlugin(),
    // 忽略 moment 下的 ./locale 目录
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, "src")
        // ],
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // 处理图片资源
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img/',
            limit: 10 * 1024,
            // name: 'static/img/[folder]/[name].[ext]',
            fallback: require.resolve('file-loader'),
          },
        },
      },
      // 处理字体文件
      {
        test: /\.(eot|ttf|woof|woof2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            limit: 10 * 1024,
          },
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      // 分割代码块
      cacheGroups: {
        vendor: {
          // 第三方依赖
          priority: 1, // 设置优先级，首先抽离第三方模块
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 1, // 最少引入了1次
        },
        // 缓存组
        common: {
          // 公共模块
          chunks: 'initial',
          name: 'common',
          minSize: 100, // 大小超过100个字节
          minChunks: 3, // 最少引入了3次
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.(scss|css)$/,
        //   chunks: 'all',
        //   enforce: true,
        // },
      },
    },
  },
};
