module.exports = {
  devServer: {
    proxy: {
      '/4000': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/4000': '' // rewrite path
        },
      }
    }
  }
}


