const path = require('path');

module.exports = {
  mode: 'development',
  stats: {
    optimizationBailout: true,
  },
  optimization: {
    concatenateModules: true,
  },
  devtool: 'none',
  entry: './b.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
}