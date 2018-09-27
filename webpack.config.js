const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  }
}