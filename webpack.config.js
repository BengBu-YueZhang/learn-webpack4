var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin')

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
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ] 
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    })
  ]
}