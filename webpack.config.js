const path = require('path')

const config = {
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
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}

module.exports = (env, argv) => {

  var cssLoader = null

  if (argv.mode === 'development') {
    console.log('开发环境')
    cssLoader = {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    }
  }

  if (argv.mode === 'production') {
    console.log('生产环境')
    cssLoader = {
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
    }
  }

  config.module.rules.push(cssLoader)

  return config
}