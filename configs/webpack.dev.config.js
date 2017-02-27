const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'devlopment'

const hmrConfig = {
  entry: [
    'webpack-hot-middleware/client'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

const commonConfig = {
  devtool: '#eval-source-map',
}

const config = merge(hmrConfig, baseWebpackConfig, commonConfig)

module.exports = config
