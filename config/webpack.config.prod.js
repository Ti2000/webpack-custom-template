const { merge } = require('webpack-merge')
const BaseWebpackConfig = require('../webpack.config.base')
const path = require('path')
module.exports = merge(BaseWebpackConfig, {
  mode: 'production',
  entry: ['@babel/polyfill', path.join(__dirname, '../SDK/main.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    libraryTarget: 'this',
    globalObject: 'this',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: '/node_modules/',
      },
    ],
  },
})
