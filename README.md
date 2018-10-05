## Dlls

使用 DllPlugin 将更改不频繁的代码(例如, react, vue)进行单独编译。这将改善引用程序的编译速度，即使它增加了构建过程的复杂性。

### Dlls原理

将基础模块(vue, vuex, vue-router)模块抽离出来, 打包到单独的动态链接库。当需要导入的模块存在于某个动态链接库中时，这个模块不能被再次被打包，而是去动态链接库中获取。

### DllPlugin

> 用于打包出一个个单独的动态链接库文件

### DllReferencePlugin

> 用于在主要配置文件中去引入 DllPlugin 插件打包好的动态链接库文件


### 构建目标

- .dll.js 动态链接库文件

- .manifest.json 动态链接库的描述文件

.dll.js需要加载到HtmlWebpackPlugin生成的html文件中, 当main.js遇到其依赖的模块在dll.js文件中时，会直接通过dll.js文件暴露出的全局变量去获取打包在dll.js文件的模块。



