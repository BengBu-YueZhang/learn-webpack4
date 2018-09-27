var path = require('path')

var config = {
  entry: {
    foo: path.resolve(__dirname, './src/foo.js'),
    bar: path.resolve(__dirname, './src/bar.js')
  },
  output: {
    path: path.resolve(__dirname, './dist')
  }
}

/**
 * baz的资源分别打包到foo, bar中
 */

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = '[name].js'
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[hash].js'
  }

  return config
}
