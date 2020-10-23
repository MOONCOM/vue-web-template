const settings = require('./src/settings');

module.exports = {
  lintOnSave: 'warning',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    name: settings.title,
  },
};
