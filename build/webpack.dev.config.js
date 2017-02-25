const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

process.env.NODE_ENV = 'devlopment'

const config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass)/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.js', '.json']
  }
}

module.exports = config
