const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          conversions: 'conversions@http://localhost:3420/remoteEntry.js',
        },
        exposes: {},
        shared: require('./package.json').dependencies,
      }),
    ],
  },
};
