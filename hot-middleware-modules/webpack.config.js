var webpack = require('webpack');
const path = require("path");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
