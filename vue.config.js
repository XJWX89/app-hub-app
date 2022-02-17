module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/app-hub-app/'
    : '/',
  configureWebpack: {
    plugins: [
      (() => {
        var ImageminPlugin = require('imagemin-webpack-plugin').default
        return new ImageminPlugin({
          disable: process.env.NODE_ENV !== 'production',
          pngquant: {
            quality: '80-100'
          }
        })
      })()
    ]
  },
  pwa: {
    themeColor: '#eee',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
