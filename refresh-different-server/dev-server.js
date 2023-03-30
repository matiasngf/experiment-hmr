const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const cors = require('cors');
const { hotPort, hotRoute } = require('./hot-config.js');

const app = express();
const compiler = webpack(config);

app.use(cors());

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  })
);

app.use(
  require(`webpack-hot-middleware`)(compiler, {
    log: console.log,
    path: hotRoute,
    heartbeat: 10 * 1000,
  })
);

app.listen(hotPort, () => console.log(`Dev server started on port ${hotPort}!`));
