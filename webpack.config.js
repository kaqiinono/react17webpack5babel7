const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './entry/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEMO',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      // minify: {
      //   // 压缩html
      //   collapseWhitespace: true, // 压缩空白
      //   removeComments: true // 去除注释
      // }
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader'],
      },
      //处理图片资源
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img/',
            limit: 10 * 1024,
            // name: 'static/img/[folder]/[name].[ext]',
            fallback: require.resolve('file-loader')
          }
        }
      },
      //处理字体文件
      {
        test: /\.(eot|ttf|woof|woof2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            limit: 10 * 1024
          }
        }
      },
    ],
  },
}