const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
}
