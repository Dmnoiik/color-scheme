const colorPicker = document.getElementById("color-picker");
const divsContainers = document.querySelectorAll(".color--container");
const clipboard = document.querySelector(".clipboard");
const copyContent = async (hexValue) => {
  try {
    await navigator.clipboard.writeText(hexValue);
    clipboard.classList.remove("hidden");
    setTimeout(() => {
      clipboard.classList.add("hidden");
    }, 1000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

function changeColors(colors) {
  const divsArr = [];
  const parArr = [];

  divsContainers.forEach((child) => {
    parArr.push(child.childNodes[3]);
    divsArr.push(child.childNodes[1]);
  });
  for (let i = 0; i < colors.length; i++) {
    divsArr[i].style.backgroundColor = colors[i].hex.value;
    parArr[i].textContent = colors[i].hex.value;
  }
}
function getColorScheme() {
  const modeType = document.querySelector("#color-type");
  const hexValue = colorPicker.value.slice(1);
  console.log(hexValue);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeType.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      changeColors(data.colors);
    });
}
export { copyContent, changeColors, getColorScheme };
