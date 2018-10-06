## minimizer

分别使用OptimizeCssAssetsPlugin压缩css代码以及ParallelUglifyPlugin混淆压缩js代码。切勿在开发模式开启代码压缩

```js
// For long term caching use filename: [contenthash].css. Optionally add [name].

new MiniCssExtractPlugin({
  filename: '[contenthash].css',
  chunkFilename: '[contenthash].css'
})
```
