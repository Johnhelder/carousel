let totalSlides = document.querySelectorAll('.slider-item').length;
let lagura = document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;