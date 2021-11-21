const { merge } = require('webpack-merge')
const BaseWebpackConfig = require('../webpack.config.base')
module.exports = merge(BaseWebpackConfig, {
  mode: 'production',
})
