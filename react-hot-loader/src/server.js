const express = require('express');
const app = express();
const path = require('path');
const HOSTNAME = 'localhost';
const PORT = 8080;
const webpack = require('webpack');
const config = require('../webpack.config.js');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackCompiler = webpack(config);

app.use(webpackDevMiddleware(webpackCompiler, {
  writeToDisk: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
  path: '/__webpack_hmr',
}));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) { return console.error(err); }
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});
