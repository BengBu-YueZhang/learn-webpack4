var path = require('path')
var DllPlugin = require('webpack/lib/DllPlugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    // moment生成动态链接库
    moment: ['moment']
  },
  output: {
    // 动态链接库的名称
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist'),
    // 动态链接库全局变量的名称
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new DllPlugin({
      // 全局变量的名称
      name: '_dll_[name]',
      // 描述动态链接库的json文件的名称
      path: path.join(__dirname, 'dist', '[name].manifest.json'),
    })
  ]
}