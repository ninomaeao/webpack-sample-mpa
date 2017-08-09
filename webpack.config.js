const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
    vendor: [
      'jquery'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about.html'
    }),
    new CleanWebpackPlugin(['public']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    hot: true
  }
};