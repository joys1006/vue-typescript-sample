// eslint-disable-next-line @typescript-eslint/no-var-requires
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  publicPath: '/',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 3000,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    // API 프록시 세팅 추가
    proxy: {
      '/api': {
        target: 'http://localhost:8010',
        secure: false,
        changeOrigin: true
      }
    }
  }
};
