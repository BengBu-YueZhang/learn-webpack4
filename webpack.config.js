var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  target: 'web',
  mode: 'none',
  entry: {
    main: path.resolve(__dirname, './src')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    https: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              require('@babel/plugin-syntax-dynamic-import')
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: loader: process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin()
  ]
}