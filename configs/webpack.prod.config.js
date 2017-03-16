const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

module.exports = (env) => {
  const prodConfig = {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false }
      }),
      new ExtractTextPlugin('static/css/[name].[contenthash].css'),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../dist/index.html'),
        template: 'index.html',
        inject: true,
        minify: { removeComments: true, collapseWhitespace: true }
      })
    ]
  }

  return merge(baseWebpackConfig(env), prodConfig)
}
