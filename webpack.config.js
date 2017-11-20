module.exports = {
  entry: './main.js',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename     : 'dist.js',
    library      : 'Cube',
    libraryTarget: 'umd'
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
