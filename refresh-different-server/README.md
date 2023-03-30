This experiment aims to divide the hot module replacement and the app iteself in two different servers.

One server will be responsible for the hot module replacement and, the other one, for serving the app itself.

To achieve this goal, we need to tell the HotModuleReplacement plugin to use a custom path and host. We will tell it to connect to a special endpoint to handle all the HMR.

Pay special attention to `hot-config.js`, which has all the variables needed for this.

To start the experiment, run:

```bash
pnpm i

pnpm run dev

pnpm run start
```

The hot server will be runing on port 3002 and the app itself on port 3000.

We tell the app to connect to `http://localhost:3002/__webpack_hmr` to fetch for any changes.

We are also telling webpack to write files to disk, so we can serve them from `server.js`.