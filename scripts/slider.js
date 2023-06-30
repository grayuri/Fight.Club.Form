const slider = document.querySelector('.slide-images');
const images = document.querySelectorAll('.slide-images img');
const maxImages = images.length;
let currentImage = 0;

function slide() {
  currentImage = currentImage == maxImages ? 0 : ++currentImage;
  if (currentImage > 0) { images[currentImage - 1].classList.remove('selected-image') };
  if (currentImage == maxImages) { currentImage = 0 };
  images[currentImage].classList.add('selected-image');
}

function start() {
  setInterval(() => { slide() }, 8000)
};

window.addEventListener('load', start());