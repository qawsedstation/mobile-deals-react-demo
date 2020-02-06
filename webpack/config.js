const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {

  output: {
    path: __dirname + '/../dist/',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules'],
    // alias for beautiful import
    alias: {

      'app': path.join(__dirname, '../app'),
      'components': path.join(__dirname, '../app/components'),
      'modules': path.join(__dirname, '../app/components/modules'),
      'pages': path.join(__dirname, '../app/components/pages'),
      'layout': path.join(__dirname, '../app/components/modules/layout'),

      'constants': path.join(__dirname, '../app/constants'),
      'redux/store': path.join(__dirname, '../app/redux/store'),
      'redux/modules': path.join(__dirname, '../app/redux/modules'),
      'redux/services': path.join(__dirname, '../app/redux/services'),
      'redux/utils': path.join(__dirname, '../app/redux/utils'),
    },
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource &&
          module.resource.indexOf('node_modules') !== -1 &&
          module.resource.indexOf('.css') === -1;
      },
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true,
      minify: {
      },
      hash: true,
    }),
  ],

  postcss: (wp) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ];
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(require('./production.config.js'), common);
} else {
  module.exports = merge(require('./development.config.js'), common);
}
