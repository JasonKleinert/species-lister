const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#b5977e' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// Don't open the browser during development
process.env.BROWSER = 'none';