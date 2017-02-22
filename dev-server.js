var webpackConfig = require('./webpack.config')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var config = {
  dev: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 8080
  }
}
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
}) 

// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
 
var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log(`> Listening at ${uri}`)
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})
