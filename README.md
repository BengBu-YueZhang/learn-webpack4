## Vendor

> 第三方模块

Vendor Chunk : Create separate files for vendor code (3rd party code coming from node_modules). A single vendor.js file will suffice. Any vendor code used inside index.js (import statements of npm modules) will be break from it and form vendor.js which will be loaded synchronously with main.js.

## Async

> 异步加载的模块

Async Chunks: Create separate files for code which can be lazy loaded. Like a file for every Route of React router which can be lazy loaded when route is changed. Webpack inject some code into main.js which takes care of lazy loading async chunks and stops from loading same chunks again and again. When route changes, React router calls a Webpack function to load a chunk file and Webpack after done loading runs it, which chunk would internally ask React to do something.

## Common

> 异步加载的模块common file

Common Chunk: Create common file from code which is shared between different chunks. For example, if 10 routes create 10 different async chunks and these chunks have a common import statement, then code associated with that import statement will get injected into respective chunk files separately. That would load same piece of code every single time we change the route, which is not a very good for UX. Instead, we could take out common code shared between different chunks and create common.js file which will be loaded synchronously with main.js beforehand.