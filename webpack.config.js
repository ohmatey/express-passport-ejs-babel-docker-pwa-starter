var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "/source/client/index.js"),
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}