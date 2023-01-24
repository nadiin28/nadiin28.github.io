function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    //закрытие на подложку и крестик
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    //закрытие на клавишу esc
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    //открытие при пролистываниее до конца страницы (только 1 раз)
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            //если высота прокрученной части + высота открытого окна >= всей высоте - 1 пиксель
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {
    closeModal
};
export {
    openModal
};