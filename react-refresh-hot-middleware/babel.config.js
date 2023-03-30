module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  const isDevelopment = !api.env('production');
  return {
    presets: [
      '@babel/preset-env',
      // Enable development transform of React with new automatic runtime
      ['@babel/preset-react', { development: isDevelopment, runtime: 'automatic' }],
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      isDevelopment && require.resolve('react-refresh/babel')
    ].filter(Boolean)
  };
};
