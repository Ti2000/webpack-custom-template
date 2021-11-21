const { merge } = require('webpack-merge')
const BaseWebpackConfig = require('../webpack.config.base')
module.exports = merge(BaseWebpackConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
})
