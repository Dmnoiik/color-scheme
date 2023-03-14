import { getColorScheme, changeColors, copyContent } from "./utils.js";

const btn = document.querySelector(".color-btn");

btn.addEventListener("click", getColorScheme);

document.querySelector("main").addEventListener("click", (event) => {
  const target = event.target;
  let hexValue;
  if (target.parentElement.nodeName === "DIV") {
    if (target.tagName === "P") {
      hexValue = target.innerHTML;
    } else {
      hexValue = target.nextElementSibling.innerHTML;
    }
  } else {
    return;
  }
  copyContent(hexValue);
});
