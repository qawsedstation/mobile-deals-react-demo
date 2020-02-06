const webpack = require('webpack');
const path = require('path');

const production = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      './app/index'
    ],
  },

  resolve: {
    unsafeCache: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css!postcss-loader!sass-loader',
      }
    ]
  }
};


module.exports = production;
