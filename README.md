# webpack hot 与 watch 的差异

![原答案](https://stackoverflow.com/questions/38089785/webpack-watch-vs-hot-whats-the-difference), watch是整页刷新, hot是局部刷新。使用watch: true会监听文件的变化, 如果发生变化会重新编译。如果使用了webpack-dev-server是不需要使用watch的。
