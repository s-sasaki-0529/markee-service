module.exports = {
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  css: {
    extract: {
      filename: '[name].css'
    }
  }
}
