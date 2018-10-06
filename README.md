## runtimeChunk

### 什么是runtime? 

runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。

### 优化

打包生成的runtime.js非常的小, 可以将它内联到我们的index.html之中。因为http请求的时间远远大于runtime.js执行的时间。

ps: 我在将runtime插入到index.html, 构建发送了错误。目前没有找到解决办法[lssue](https://github.com/numical/script-ext-html-webpack-plugin/issues/46)