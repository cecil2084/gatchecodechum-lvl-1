let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  const carouselInner = document.querySelector('.carousel-inner');
  const width = slides[0].clientWidth;
  carouselInner.style.transform = `translateX(${-currentSlide * width}px)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  window.addEventListener('resize', () => {
    showSlide(currentSlide);
  });
});
