const slider = document.querySelectorAll('.slide');

slider.forEach((slide) => {
  slide.addEventListener('click', () => {
    inActive();
    slide.classList.add('active');
  });
});

function inActive() {
  slider.forEach((slide) => slide.classList.remove('active'));
}
