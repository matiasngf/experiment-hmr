# experiment-hmr

This repository contains experiments with hot module replacement (HMR) in JavaScript.

List of experiments:

## [./webpack-hot-middleware](./wepack-hot-middleware/)

Minimal HMR example using a custom server.

Uses:
- `webpack-hot-middleware`
- `webpack-dev-middleware`
- `custom server with express`

## [./hot-middleware-modules](./hot-middleware-modules/)

Handles a "restart" of the app. Writes files to disk.

Uses:
- `webpack-hot-middleware`
- `webpack-dev-middleware`
- `custom server with express`

## [./react-hot-loader](./react-hot-loader/)

Implementation of HMR with React Hot Loader.

Uses:
- `react-hot-loader`
- `webpack-hot-middleware`
- `webpack-dev-middleware`
- `custom server with express`