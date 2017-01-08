var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/client/index'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new CleanPlugin(['./dist'], {verbose: true}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [path.resolve(__dirname, 'source/client')]
    },
    {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }]
  }
};