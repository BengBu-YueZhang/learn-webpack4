import './index.css'

function component(): any {
  var element: any = document.createElement("div");
  element.innerHTML = "css-loader";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
