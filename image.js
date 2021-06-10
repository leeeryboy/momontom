const body = document.querySelector("body");

const NUM_IMG = 5;

const randomNum = Math.floor(Math.random() * NUM_IMG);

function loadImg() {
  const img = new Image();
  img.src = `images/${randomNum + 1}.jpg`;
  body.appendChild(img);
}

function init() {
  loadImg();
}

init();
