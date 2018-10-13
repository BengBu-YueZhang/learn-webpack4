import './index.less';
/**
 * 兼容低版本安坐，转换vw的单位
 */
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks
})

function component1() {
  var element = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("box");
  element.classList.add("scale-1px-bottom")
  return element;
}

function component2() {
  var element = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("box");
  element.classList.add("scale-1px-top")
  return element;
}

function component3() {
  var element = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("box");
  element.classList.add("scale-1px-left")
  return element;
}

function component4() {
  var element = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("box");
  element.classList.add("scale-1px-right")
  return element;
}

function component5() {
  var element = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("box");
  element.classList.add("scale-1px")
  return element;
}

document.body.appendChild(component1())
document.body.appendChild(component2())
document.body.appendChild(component3())
document.body.appendChild(component4())
document.body.appendChild(component5())