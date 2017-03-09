const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV = 'production'

module.exports = (env) => {
  const config = {
    entry: {
      main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
      filename: '[chunkhash].[name].bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: path.resolve(__dirname, '../src'),
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => {
          return module.context && module.context.indexOf('node_modules') >= 0
        },
        filename: 'vendor.js'
      }),
      (env.analyzer === 'true' ? new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }) : null)
    ].filter(plugin => plugin), // cant apply on null plugin value
    resolve: {
      modules: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ],
      extensions: ['.js', '.json']
    }
  }

  return config
}
