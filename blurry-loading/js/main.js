const loadingText = document.getElementById("loading-text");
const bg = document.getElementById("bg");

let counter = 0;
let blurPx = 20;
let opacityText = 1;

setInterval(() => {
  if (counter < 100) {
    counter++;
  } else {
    counter = 100;
  }

  loadingText.innerText = `${counter}%`;
}, 20);

setInterval(() => {
  blurPx--;

  bg.style.filter = `blur(${blurPx}px)`;
}, 105);

setInterval(() => {
  opacityText -= 0.1;

  loadingText.style.opacity = `${opacityText}`;
}, 205);
