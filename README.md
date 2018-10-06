## 🌲 tree shaking

通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code), 基于ES6 modules的静态特性检查。但是babel-preset-env会默认将ES6 modules转换为commonjs。所以需要关闭babel-preset-env的模块转换。webpack会自己进行模块化处理。

如果需要使用tree shaking, 必须在package.json文件中添加sideEffects属性, 声明那些代码是有"副作用"的不能被删除的。在打包时, 将mode设置为production既可以启动树摇。