window.addEventListener('DOMContentLoaded', () => {
  // Slider

  const slides = document.querySelectorAll('.slider__item'),
    dots = document.querySelector('.slider__dots'),
    prev = document.querySelector('.slider__arrow.slider__arrow_right'),
    next = document.querySelector('.slider__arrow.slider__arrow_left');
  let slideIndex = 0;
  const dotsArr = [];

  createDots();
  showSlides(slideIndex);

  function createDots() {
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i);
      dot.classList.add('slider__dot');
      dots.append(dot);
      dotsArr.push(dot);
    }
  }

  function showSlides(n) {
    if (n < 0) {
      slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
      slideIndex = 0;
    } else {
      slideIndex = n;
    }

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    dotsArr.forEach((dot) => {
      dot.classList.remove('active');
    });

    slides[slideIndex].style.display = 'block';
    dotsArr[slideIndex].classList.add('active');
  }

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsArr.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlides(index);
    });
  });

  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      plusSlides(1); // Свайп влево
    } else if (touchEndX - touchStartX > 50) {
      plusSlides(-1); // Свайп вправо
    }
  }

  // Добавляем обработчики событий touch для переключения слайдов перелистыванием пальцем
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);

  //product main page
  // Получаем все кнопки
  const buttons = document.querySelectorAll('.product__btn');

  // Получаем все блоки слайдеров
  const sliders = document.querySelectorAll('.product__slider');
  sliders.forEach((slider) => {
    slider.style.display = 'none';
  });

  // Отображаем соответствующий блок слайдера
  sliders[0].style.display = 'block';
  // Добавляем обработчики событий для кнопок
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок
      buttons.forEach((btn) => btn.classList.remove('product__btn-active'));

      // Добавляем активный класс для текущей кнопки
      button.classList.add('product__btn-active');

      // Скрываем все блоки слайдеров
      sliders.forEach((slider) => {
        slider.style.display = 'none';
      });

      // Отображаем соответствующий блок слайдера
      sliders[index].style.display = 'block';
    });
  });

  //desktop dropdown menu

  // Получаем ссылки на необходимые элементы DOM
  const catalog = document.querySelector('.header__catalog');
  const dropdown = document.querySelector('.header__dropdown');
  const dropdownMobile = document.querySelector('.dropdown_mobile');
  const closeBtn = document.querySelector('.dropdown_mobile__header_close');

  // Добавляем обработчик события наведения курсора на элемент .header__catalog
  catalog.addEventListener('mouseover', function () {
    if (window.innerWidth > 1024) {
      dropdown.style.visibility = 'visible';
    }
  });
  catalog.addEventListener('mouseout', function () {
    if (window.innerWidth > 1024) {
      dropdown.style.visibility = 'hidden';
    }
  });
  dropdown.addEventListener('mouseover', function () {
    if (window.innerWidth > 1024) {
      dropdown.style.visibility = 'visible';
    }
  });
  dropdown.addEventListener('mouseout', function () {
    if (window.innerWidth > 1024) {
      dropdown.style.visibility = 'hidden';
    }
  });
  catalog.addEventListener('click', function () {
    if (window.innerWidth <= 1024) {
      dropdownMobile.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
    }
  });

  // Добавляем обработчик события клика на элемент .dropdown_mobile__header_close
  closeBtn.addEventListener('click', function () {
    dropdownMobile.style.display = 'none';
    document.querySelector('body').style.overflow = 'initial';
  });

  // Добавляем обработчик события изменения размера окна
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      dropdownMobile.style.display = 'none';
    }
  });

  // Получаем ссылки на необходимые элементы DOM
  const blocks = document.querySelectorAll('.dropdown_mobile__block');
  const headerPrev = document.querySelector('.dropdown_mobile__header_prev');

  // Добавляем обработчик события клика на элемент dropdown_mobile__header_prev
  headerPrev.addEventListener('click', function () {
    // Скрываем все блоки dropdown_mobile__item
    const items = document.querySelectorAll('.dropdown_mobile__item');
    items.forEach(function (item) {
      item.style.display = 'flex';
    });

    // Скрываем все блоки dropdown_mobile_card
    const cards = document.querySelectorAll('.dropdown_mobile_card');
    cards.forEach(function (card) {
      card.style.display = 'none';
    });
  });

  // Добавляем обработчики событий клика на каждый блок dropdown_mobile__block
  blocks.forEach(function (block) {
    const items = block.querySelectorAll('.dropdown_mobile__item');
    const cards = block.querySelectorAll('.dropdown_mobile_card');

    if (cards.length > 0) {
      items.forEach(function (item, index) {
        item.addEventListener('click', function () {
          // Скрываем все блоки dropdown_mobile__item внутри всех блоков dropdown_mobile__block
          blocks.forEach(function (block) {
            const items = block.querySelectorAll('.dropdown_mobile__item');
            items.forEach(function (item) {
              item.style.display = 'none';
            });
          });

          // Скрываем все блоки dropdown_mobile_card внутри всех блоков dropdown_mobile__block
          blocks.forEach(function (block) {
            const cards = block.querySelectorAll('.dropdown_mobile_card');
            cards.forEach(function (card) {
              card.style.display = 'none';
            });
          });

          // Отображаем соответствующий блок dropdown_mobile_card
          const card = cards[index];
          card.style.display = 'block';
        });
      });
    }
  });

  //search mobile
  const open_search = document.querySelector('.header__contact_mobile_search');
  const close_search = document.querySelector('.header__search_mobile_close');
  const search = document.querySelector('.header__search_mobile');

  open_search.addEventListener('click', () => {
    search.style.display = 'block';
  });
  close_search.addEventListener('click', () => {
    search.style.display = 'none';
  });

  //phone mobile
  const phone_btn = document.querySelector('.header__contact_mobile_phone');
  const phone_dropdown = document.querySelector('.header__contact_mobile_phone_dropdown');

  phone_btn.addEventListener('click', () => {
    phone_dropdown.classList.toggle('header__contact_mobile_phone_dropdown-active');
  });

  //nav mobile
  const open_nav = document.querySelector('.header__contact_mobile_hamburger .open');
  const close_nav = document.querySelector('.header__contact_mobile_hamburger .close');
  const nav = document.querySelector('.header__mobile__nav');

  open_nav.addEventListener('click', () => {
    nav.style.display = 'grid';
    open_nav.style.display = 'none';
    close_nav.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  });
  close_nav.addEventListener('click', () => {
    nav.style.display = 'none';
    open_nav.style.display = 'block';
    close_nav.style.display = 'none';
    document.querySelector('body').style.overflow = 'initial';
  });
});

//slider

$(document).ready(function () {
  $('.product__slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
