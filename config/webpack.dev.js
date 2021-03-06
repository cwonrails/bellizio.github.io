var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        use: [
          '@angularclass/hmr-loader',
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'assets', 'css'),
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap=inline',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
