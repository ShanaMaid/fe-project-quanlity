const path = require('path');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  mode: 'production',
  entry: './a.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new PrepackWebpackPlugin()
  ]
}