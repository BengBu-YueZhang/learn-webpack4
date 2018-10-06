
var path = require('path')
var DllPlugin = require('webpack/lib/DllPlugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    vue: ['vue', 'vuex', 'vue-router']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dist/dll'),
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'dist', './dll/[name].manifest.json'),
    })
  ]
}