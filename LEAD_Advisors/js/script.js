window.addEventListener('DOMContentLoaded', () => {
  //timer
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', '2023-05-31');

  //form

  const form = document.getElementById('subscription-form');
  const message = document.querySelector('.footer__message');
  const subMessage = document.querySelector('.modal__subheader');
  const popup = document.querySelector('.modal');
  const popupMessage = document.querySelector('.modal__header');
  const popupClose = document.querySelector('.modal__close');
  const btnClose = document.querySelector('.modal__btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();

    if (!email) {
      message.innerHTML = 'Please enter your email.';
      return;
    }

    message.style.display = 'none';

    const request = new XMLHttpRequest();
    request.open('POST', '../server.php');
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    request.addEventListener('load', () => {
      if (request.status == 200) {
        popupMessage.innerHTML = 'SUCCESS!';
        popup.style.display = 'block';
        form.reset();
      } else {
        popupMessage.innerHTML = 'ERROR!';
        popup.style.display = 'block';
        subMessage.style.display = 'none';
      }
    });
    request.send(JSON.stringify({ email: email }));
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  btnClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popup.style.display != 'none') {
      popup.style.display = 'none';
    }
  });

  window.addEventListener('click', (event) => {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });

  //scroll
  const otherEventsBtn = document.querySelector('.footer__other');
  const nextSection = document.getElementById('events');

  otherEventsBtn.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  //animate
  new WOW().init();

  //accordion
  const DESKTOP_SCREEN_WIDTH = 1710;
  const DESKTOP_CONTENT_MAX_WIDTH = '995px';
  const MOBILE_CONTENT_MAX_HEIGHT = '682px';

  const allAccordions = document.querySelectorAll('.accordion');
  const allContents = document.querySelectorAll('.content');

  function closeAllContents() {
    allContents.forEach((content) => {
      content.style.maxWidth = null;
      content.style.maxHeight = null;
      content.classList.remove('active');
    });
  }

  function toggleContent(content) {
    if (window.innerWidth >= DESKTOP_SCREEN_WIDTH) {
      if (content.style.maxWidth) {
        closeAllContents();
      } else {
        closeAllContents();
        content.style.maxWidth = DESKTOP_CONTENT_MAX_WIDTH;
        content.classList.add('active');
      }
    } else {
      if (content.style.maxHeight) {
        closeAllContents();
      } else {
        closeAllContents();
        content.style.maxHeight = MOBILE_CONTENT_MAX_HEIGHT;
        content.classList.add('active');
      }
    }
  }

  allAccordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      const content = accordion.nextElementSibling;
      toggleContent(content);
    });
  });

  const image = [
    '../img/event/photo.png',
    '../img/event/MafiaParty.jpg',
    '../img/event/Party.jpg',
    '../img/event/onTheBeatch.jpg',
    '../img/event/homeSequrity.jpg',
    '../img/event/network.jpg',
    '../img/event/System.jpg',
    '../img/event/Client.jpg',
  ];

  const items = document.querySelectorAll('.accordion');
  items[0].classList.add('active');
  items.forEach((item, index) => {
    if (index !== 0) {
      item.style.backgroundImage = `url(${image[index]})`;
      item.classList.remove('active');
    }
    item.addEventListener('click', () => {
      items.forEach((otherItem, i) => {
        otherItem.classList.remove('active');
        otherItem.style.backgroundImage = `url(${image[i]})`;
        otherItem.classList.add('accordion::after');
      });
      item.classList.add('active');
      item.style.backgroundImage = 'none';
      item.classList.remove('accordion::after');
    });
  });
});
