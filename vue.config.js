
const path = require('path');
const debug = process.env.NODE_ENV !== 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: debug ? true : false,
  publicPath: './',
  outputDir: 'order',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    }
  }
}
