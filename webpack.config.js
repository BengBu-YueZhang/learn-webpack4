var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HappyPack = require('happypack')
// var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'web',

  mode: 'none',

  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },

  module: {
    // 使用id为js的HappyPack
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'happypack/loader?id=js'
      },
      // 使用id为css的HappyPack
      {
        test: /\.css$/,
        use: 'happypack/loader?id=css'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: []
          }
        }
      ]
    }),
    new HappyPack({
      id: 'css',
      threads: 4,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
          }
        }
      ]
    })
  ]
}