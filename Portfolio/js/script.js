const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('activ');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('activ');
});

const counters = document.querySelectorAll('.skills__progress-percent'),
  lines = document.querySelectorAll('.skills__progress-line_o');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
