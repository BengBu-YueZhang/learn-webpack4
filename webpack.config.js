var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var HappyPack = require('happypack')
var DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var webpack = require('webpack')

module.exports = {
  target: 'web',

  mode: 'production',

  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },

  output: {
    // 使用chunkhash, chunkhash会根据代码内容生成hash
    filename: './static/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist')
  },

  optimization: {
    // 压缩css, js
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true },
          mergeLonghand: false,
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      })
    ],

    // 拆包策略
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendors-chunk',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 20  
        },
        ui: {
          name: 'ui-chunk',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 30
        },
        common: {
          name: 'common-chunk',
          chunks: 'all',
          minChunks: 2,
          test: path.resolve(__dirname, './src/components'),
          priority: 10,
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      // .vue文件的处理
      // https://github.com/vuejs/vue-loader/issues/1273
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'happypack/loader?id=js'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          name: './static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './static/font/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['dll']
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/index.html'),
      template: path.resolve(__dirname, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/[contenthash].css'
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
              // import() plugin
              // require('@babel/plugin-syntax-dynamic-import')
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin(),
    new DllReferencePlugin({
      manifest: require('./dist/dll/vue.manifest.json'),
    }),
    // https://github.com/SimenB/add-asset-html-webpack-plugin/issues/82
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, './dist/dll/*.dll.js'),
        includeSourcemap: false,
        publicPath: './dll',
        outputPath: '/dll'
      }
    ]),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name;
      }
      return Array.from(chunk.modulesIterable, m => m.id).join("_");
    }),
    new BundleAnalyzerPlugin()
  ]
}