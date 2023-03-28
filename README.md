# experiment-hmr

This repository contains experiments with hot module replacement (HMR) in JavaScript.

List of experiments:

## [webpack-hot-middleware](./wepack-hot-middleware/)

Minimal HMR example.

Uses:
- `webpack-hot-middleware`
- `webpack-dev-middleware`
- `custom server with express`

## [hot-middleware-modules](./hot-middleware-modules/)

Handles a "restart" of the app. Writes files to disk.

Uses:
- `webpack-hot-middleware`
- `webpack-dev-middleware`
- `custom server with express`