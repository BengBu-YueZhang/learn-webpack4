var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin")

module.exports = {
  target: 'web',

  mode: 'production',

  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },

  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: []
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime\..*\.js$/
    })
  ]
}