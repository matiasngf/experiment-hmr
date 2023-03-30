const hotPort = 3002;
const hotHost = 'localhost';
const hotHostWithProtocol = `http://${hotHost}`;

const hotRoute = '/__webpack_hmr';
const hotPath = `${hotHostWithProtocol}:${hotPort}/__webpack_hmr`;
const hotClient = `webpack-hot-middleware/client?path=${hotPath}&timeout=20000&reload=true&overlay=false`;

module.exports = {
  hotPort,
  hotPath,
  hotClient,
  hotHost,
  hotRoute,
  hotHostWithProtocol
}