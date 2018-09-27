const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}