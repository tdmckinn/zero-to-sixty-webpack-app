const webpackDevConfig = require('./configs/webpack.dev.config')
const express = require('express')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

const webpackConfig = webpackDevConfig(
  Object.assign({
    analyzer: 'false'
  }, process.env
))

const config = {
  dev: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 7777
  }
}
// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

const app = express()
const compiler = webpack(webpackConfig)

compiler.apply(new DashboardPlugin())

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: false
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

const uri = `http://localhost:${port}`

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}`)
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
})
