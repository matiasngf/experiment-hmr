const http = require('http');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);  

app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(hotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Listening on %j', server.address());
});