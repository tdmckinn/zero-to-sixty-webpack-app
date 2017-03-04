const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'devlopment'

const hmrConfig = {
  entry: ['webpack-hot-middleware/client'],
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
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }]
      }
    ]
  }
}

const config = merge(hmrConfig, baseWebpackConfig, commonConfig)

module.exports = config
