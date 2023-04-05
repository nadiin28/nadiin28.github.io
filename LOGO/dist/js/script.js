window.addEventListener('DOMContentLoaded', () => {
  //Slider

  const slides = document.querySelectorAll('.slider__item'),
    dots = document.querySelector('.slider__dots'),
    prev = document.querySelector('.slider__arrow_left'),
    next = document.querySelector('.slider__arrow_right');
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    const indicators = document.createElement('ol');
    dotsArr = [];
    indicators.classList.add('slider__indicators');
    dots.append(indicators);

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.classList.add('slider__dot');
      if (i == 0) {
        dot.classList.add('active');
      }
      indicators.append(dot);
      dotsArr.push(dot);
    }

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = 'none'));

    slides[slideIndex - 1].style.display = 'block';

    dotsArr.forEach((dot) => dot.classList.remove('active'));
    dotsArr[slideIndex - 1].classList.add('active');
  }

  dotsArr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;

      slides.forEach((item) => (item.style.display = 'none'));

      slides[slideIndex - 1].style.display = 'block';

      dotsArr.forEach((dot) => dot.classList.remove('active'));
      dotsArr[slideIndex - 1].classList.add('active');
    });
  });

  function plussSlides(n) {
    showSlides((slideIndex += n));
  }

  prev.addEventListener('click', () => {
    plussSlides(-1);
  });

  next.addEventListener('click', () => {
    plussSlides(1);
  });

  //menu

  const menu = document.querySelector('.header__menu_nav'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__menu_nav_active');
  });
});
