var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/images/[name].[hash].[ext]'
      }
    ]
  },

  performance: {
    hints: false
  },

  plugins: [
    // see https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      // injects bundle into index.html, copies it to build folder
      template: './src/index.html'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: helpers.root('src', 'assets', 'css'),
      files: '**/*.scss',
      quiet: true
    })
  ]
};
