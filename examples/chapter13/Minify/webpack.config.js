const path = require('path');

module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
    minimize: true,
  },
  devtool: 'none',
  entry: './b.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
}