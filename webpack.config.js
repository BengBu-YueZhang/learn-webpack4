var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    // 使用动态链接库
    new DllReferencePlugin({
      manifest: require('./dist/moment.manifest.json'),
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, './**/*.dll.js')
      }
    ])
  ]
}