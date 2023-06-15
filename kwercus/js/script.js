window.addEventListener('DOMContentLoaded', () => {
  // Slider *******************************************************

  /*  const slides = document.querySelectorAll('.slider__item'),
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

   //product main page ************************************************
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
  */


  //desktop dropdown menu******************************************************

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

  //search mobile *****************************************************************************
  const open_search = document.querySelector('.header__contact_mobile_search');
  const close_search = document.querySelector('.header__search_mobile_close');
  const search = document.querySelector('.header__search_mobile');

  open_search.addEventListener('click', () => {
    search.style.display = 'block';
    document.querySelector('.header__search_mobile_input').focus()
  });
  close_search.addEventListener('click', () => {
    search.style.display = 'none';
  });

  //phone mobile *******************************************************************************
  const phone_btn = document.querySelector('.header__contact_mobile_phone');
  const phone_dropdown = document.querySelector('.header__contact_mobile_phone_dropdown');

  phone_btn.addEventListener('click', () => {
    phone_dropdown.classList.toggle('header__contact_mobile_phone_dropdown-active');
  });

  // Event listener to hide the dropdown when clicking outside
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!phone_btn.contains(target) && !phone_dropdown.contains(target)) {
      phone_dropdown.classList.remove('header__contact_mobile_phone_dropdown-active');
    }
  });


  //nav mobile *********************************************************************************
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

  //accordion left menu *************************************************************************

  const acc = document.querySelectorAll('.left__menu_item');

  acc.forEach((item, index) => {
    const btn = item.querySelector('.left__menu_item_btn');
    const panel = item.querySelector('.left__submenu');
    const list = item.querySelector('.left__list');


    if (index === 0) {
      btn.classList.add('left__menu_item_btn-active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = null;
    }

    btn.addEventListener('click', () => {
      const isActive = btn.classList.contains('left__menu_item_btn-active');
      // Закрыть все открытые вкладки
      acc.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.left__menu_item_btn');
        const otherPanel = otherItem.querySelector('.left__submenu');
        const otherList = otherItem.querySelector('.left__list');

        if (otherItem !== item) {
          otherBtn.classList.remove('left__menu_item_btn-active');
          otherPanel.style.maxHeight = null;
          otherList.style.maxHeight = null;
        }
      });

      // Открыть или закрыть текущую вкладку
      if (isActive) {
        btn.classList.remove('left__menu_item_btn-active');
        panel.style.maxHeight = null;
        list.style.maxHeight = null;
      } else {
        btn.classList.add('left__menu_item_btn-active');
        panel.style.maxHeight = panel.scrollHeight + 'px';

        // Регулировка высоты родительского блока
        const parentPanel = item.closest('.left__submenu');
        if (parentPanel) {
          parentPanel.style.maxHeight = parentPanel.scrollHeight + panel.scrollHeight + 'px';
        }
      }
    });
  });

  const innerAcc = document.querySelectorAll('.left__submenu_item');

  innerAcc.forEach((item) => {
    const btn = item.querySelector('.left__submenu_item_btn');
    const panel = item.querySelector('.left__list');

    btn.addEventListener('click', () => {
      const isActive = btn.classList.contains('left__submenu_item_btn-active');

      // Закрыть все открытые вкладки
      innerAcc.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.left__submenu_item_btn');
        const otherPanel = otherItem.querySelector('.left__list');

        if (otherItem !== item) {
          otherBtn.classList.remove('left__submenu_item_btn-active');
          otherPanel.style.maxHeight = null;
        }
      });

      // Открыть или закрыть текущую вкладку
      if (isActive) {
        btn.classList.remove('left__submenu_item_btn-active');
        panel.style.maxHeight = null;
      } else {
        btn.classList.add('left__submenu_item_btn-active');
        panel.style.maxHeight = panel.scrollHeight + 'px';

        // Регулировка высоты родительского блока
        const parentPanel = item.closest('.left__menu_item').querySelector('.left__submenu');
        if (parentPanel) {
          parentPanel.style.maxHeight = parentPanel.scrollHeight + panel.scrollHeight + 'px';
        }
      }
    });
  });

  //catalog skrolling tabs **************************************************************************
  const tabsContainer = document.querySelector('.catalog__blocks_tabs');
  const tabs = document.querySelectorAll('.catalog__blocks_tab');

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Начало перетаскивания
  function startDragging(e) {
    isDragging = true;
    startX = e.pageX - tabsContainer.offsetLeft;
    scrollLeft = tabsContainer.scrollLeft;
    tabsContainer.classList.add('dragging');
  }

  // Процесс перетаскивания
  function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabsContainer.offsetLeft;
    const walk = (x - startX) * 3;
    tabsContainer.scrollLeft = scrollLeft - walk;
  }

  // Конец перетаскивания
  function stopDragging() {
    isDragging = false;
    tabsContainer.classList.remove('dragging');
  }

  // Обработчик события для скролла колесиком мыши
  function handleMouseWheel(e) {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    const scrollAmount = 500;
    tabsContainer.scrollLeft += delta * scrollAmount;
  }

  // Добавляем обработчики событий для перетаскивания и скролла колесиком мыши
  tabsContainer.addEventListener('mousedown', startDragging);
  tabsContainer.addEventListener('mousemove', drag);
  tabsContainer.addEventListener('mouseup', stopDragging);
  tabsContainer.addEventListener('mouseleave', stopDragging);
  tabsContainer.addEventListener('wheel', handleMouseWheel);



  //pagination **********************************************************************************

  document.querySelectorAll('.catalog__blocks_block').forEach(item => {
    // Получаем все карточки новостей и блок пагинации
    const newsCards = item.querySelectorAll('.product__slider_item');
    const paginationList = item.querySelector('.pagination__list');
    const prevButton = item.querySelector('.pagination__prev');
    const nextButton = item.querySelector('.pagination__next');

    const count = 12;
    // Определяем количество страниц и текущую страницу
    let totalPages = Math.ceil(newsCards.length / count);
    let currentPage = 1;

    if (totalPages <= 1) {
      item.querySelector('.pagination').style.display = 'none';
    } else {
      item.querySelector('.pagination').style.display = 'flex';
    }

    // Функция для отображения карточек на странице
    function showPage(page) {
      // Обновляем текущую страницу
      currentPage = page;

      // Очищаем контейнер с карточками новостей
      item.querySelector('.catalog__blocks_block_wrapper').innerHTML = '';

      // Определяем начальный и конечный индексы для текущей страницы
      const startIndex = (page - 1) * count;
      const endIndex = startIndex + count;

      // Отображаем карточки новостей для текущей страницы
      for (let i = startIndex; i < endIndex && i < newsCards.length; i++) {
        item.querySelector('.catalog__blocks_block_wrapper').appendChild(newsCards[i]);
      }

      // Обновляем пагинацию
      generatePagination();
      updatePaginationButtons();
    }

    // Функция для генерации элементов пагинации
    function generatePagination() {
      paginationList.innerHTML = '';

      // Если количество страниц больше 7
      if (totalPages > 7) {
        // Если текущая страница меньше или равна 4, показываем номера первых 5 страниц, затем многоточие и последнюю страницу
        if (currentPage <= 4) {
          for (let i = 1; i <= 5; i++) {
            paginationList.appendChild(createPaginationItem(i, i === currentPage));
          }
          paginationList.appendChild(createPaginationItem('...', false));
          paginationList.appendChild(createPaginationItem(totalPages, false));
        }
        // Если текущая страница больше или равна (totalPages - 4), показываем первую страницу, многоточие и номера последних 5 страниц
        else if (currentPage >= totalPages - 3) {
          paginationList.appendChild(createPaginationItem(1, false));
          paginationList.appendChild(createPaginationItem('...', false));
          for (let i = totalPages - 4; i <= totalPages; i++) {
            paginationList.appendChild(createPaginationItem(i, i === currentPage));
          }
        }
        // Если текущая страница находится где-то в середине, показываем первую страницу, многоточие, страницы до и после текущей, и последнюю страницу
        else {
          paginationList.appendChild(createPaginationItem(1, false));
          paginationList.appendChild(createPaginationItem('...', false));
          paginationList.appendChild(createPaginationItem(currentPage - 1));
          paginationList.appendChild(createPaginationItem(currentPage, true));
          paginationList.appendChild(createPaginationItem(currentPage + 1));
          paginationList.appendChild(createPaginationItem('...', false));
          paginationList.appendChild(createPaginationItem(totalPages, false));
        }
      }
      // Если количество страниц не больше 7, показываем все номера страниц
      else {
        for (let i = 1; i <= totalPages; i++) {
          paginationList.appendChild(createPaginationItem(i, i === currentPage));
        }
      }
    }

    // Функция для создания элемента пагинации
    function createPaginationItem(pageNumber, isActive) {
      const listItem = document.createElement('li');
      listItem.classList.add('pagination__item');
      if (isActive) {
        listItem.classList.add('active');
      }
      if (pageNumber === '...') {
        listItem.innerHTML = '<span>...</span>';
        listItem.classList.add('pagination__item--disabled');
      } else {
        listItem.innerHTML = `<a href="#">${pageNumber}</a>`;
        // Обработчик события для переключения страницы при клике на номер страницы
        listItem.addEventListener('click', function (e) {
          e.preventDefault();
          // Получаем номер выбранной страницы
          const selectedPage = parseInt(e.target.innerHTML);
          // Отображаем соответствующие карточки новостей
          showPage(selectedPage);
        });
      }
      return listItem;
    }

    // Обновление состояния кнопок "Вперед" и "Назад"
    function updatePaginationButtons() {
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    }

    // Обработчик события для кнопки "Вперед"
    nextButton.addEventListener('click', function (e) {
      e.preventDefault();
      // Переключаемся на следующую страницу
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });

    // Обработчик события для кнопки "Назад"
    prevButton.addEventListener('click', function (e) {
      e.preventDefault();
      // Переключаемся на предыдущую страницу
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });

    // Отображаем первую страницу по умолчанию
    showPage(1);
  })




  //catalog card page ********************************************************
  // Получаем все кнопки
  const buttons = document.querySelectorAll('.catalog__blocks_tab');

  // Получаем все блоки слайдеров
  const blocksAll = document.querySelectorAll('.catalog__blocks_block');
  blocksAll.forEach((block) => {
    block.style.display = 'none';
  });

  // Отображаем соответствующий блок слайдера
  blocksAll[0].style.display = 'block';
  buttons[0].classList.add('catalog__blocks_tab-active');
  // Добавляем обработчики событий для кнопок
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок
      buttons.forEach((btn) => btn.classList.remove('catalog__blocks_tab-active'));

      // Добавляем активный класс для текущей кнопки
      button.classList.add('catalog__blocks_tab-active');

      // Скрываем все блоки слайдеров
      blocksAll.forEach((block) => {
        block.style.display = 'none';
      });

      // Отображаем соответствующий блок слайдера
      blocksAll[index].style.display = 'block';
    });
  });





  //уменьшение контейнера, если открыта корзина ****************************************************************
  const container = document.querySelector('.catalog__blocks');
  const basket = document.querySelector('.basket');
  const mobile_basket = document.querySelector('.basket__mobile');

  if (basket.classList.contains('basket-active')) {
    container.classList.add('catalog__blocks-active');
  } else {
    container.classList.remove('catalog__blocks-active');
  }


  //перенос корзины, если ширина экрана меньше 768px ****************************************************************
  function removeBasketActiveClass() {
    basket.classList.remove('basket-active');
    container.classList.remove('catalog__blocks-active');
    mobile_basket.classList.add('basket__mobile-active');
    document.querySelector('.bypro').style.marginBottom = '76px';
  }

  // Функция для проверки размера экрана и удаления класса
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      removeBasketActiveClass();
    }
  }

  // Проверить размер экрана при загрузке страницы
  checkScreenSize();

  // Проверить размер экрана при изменении размеров окна
  window.addEventListener('resize', checkScreenSize);

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
    responsive: [{
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