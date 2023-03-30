const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { hotPort, hotClient, hotHost } = require('./hot-config');

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    main: [hotClient, './src/index.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: 'whm',
          sockHost: hotHost,
          sockPort: hotPort,
        },
      }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
