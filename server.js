const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config') 

const app = express()
const compiler = webpack(config)
const devMiddleware = webpackDevMiddleware(compiler, {
publicPath: config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)


app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(path.resolve('public')))

app.get('/*', (_, res) => {
res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(3000, () => {
console.log('Development server running at localhost:3000')
})