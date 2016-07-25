
let fs = require('fs');

let webpack = require('webpack');

let nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    return nodeModules[mod] = "commonjs " + mod;
  }
);

module.exports = {

  entry: ['webpack/hot/poll?1000', './src/main'],

  target: 'node',

  output: {
    path: 'build/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  resolve: {
    extensions: ['.js', '' ]
  },

  externals: nodeModules

};