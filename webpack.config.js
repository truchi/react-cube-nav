module.exports = {
  entry: './main.js',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename: 'dist.js'
  },
  module: {
    rules: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        use    : 'babel-loader'
      }
    ]
  }
}
