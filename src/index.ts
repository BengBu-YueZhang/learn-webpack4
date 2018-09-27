import './index.css'

function componentOne(): any {
  var element: any = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("hello");
  return element;
}

function componentTwo(): any {
  var element: any = document.createElement("div");
  element.innerHTML = "file-loader";
  element.classList.add('box');
  return element;
}

document.body.appendChild(componentOne());
document.body.appendChild(componentTwo());