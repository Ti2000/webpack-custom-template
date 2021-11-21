const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src/main.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'SDK',
    publicPath: '/',
    libraryExport: 'default',
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
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'SDK',
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    // new webpack.BannerPlugin('注释'),
  ],
}
