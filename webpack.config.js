const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename     : './dist/react-cube-nav.js',
    library      : 'Cube',
    libraryTarget: 'umd'
  },
  plugins: [
    new PeerDepsExternalsPlugin(),
  ],
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
