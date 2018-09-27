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
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "file-loader",
          },
          {
            loader: "extract-loader",
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}