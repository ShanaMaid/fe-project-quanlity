const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './a.js',
  optimization: {
    concatenateModules: false
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new ClosurePlugin({
      mode: 'AGGRESSIVE_BUNDLE',
    })
  ]
}