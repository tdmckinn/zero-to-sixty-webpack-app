const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'development'

module.exports = (env) => {
  const baseConfig = baseWebpackConfig(env)
  const hmrHotEntry = ['webpack-hot-middleware/client']

  Object.keys(baseConfig.entry).forEach((name) => {
    baseConfig.entry[name] = hmrHotEntry.concat(baseConfig.entry[name])
  })

  const hmrConfig = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }

  const devconfig = {
    devtool: '#eval-source-map',
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
    },
    plugins: [ 
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
  }

  return merge(baseConfig, hmrConfig, devconfig)
}
