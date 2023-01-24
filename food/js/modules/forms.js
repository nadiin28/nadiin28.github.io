import {
    closeModal,
    openModal
} from './modal';
import {
    postData
} from '../services/services';

function forms(formSelector, modalTimerId) {
    //Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    //подвязываем под формы 
    forms.forEach(item => {
        bindPostDate(item);
    });



    //отвечает за постинг данных
    function bindPostDate(form) {
        //submit сробатывает каждый раз, когда пытаемся отправить форму
        form.addEventListener('submit', (e) => {
            //отменить стандартное поведение браузера 
            e.preventDefault();


            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            //перевод в формат json
            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    //удалить блок
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    //очистить форму
                    form.reset();
                });
        });
    }

    //красивое оповещение пользователя
    function showThanksModal(message) {
        const prevModalDialoge = document.querySelector('.modal__dialog');

        prevModalDialoge.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialoge.classList.add('show');
            prevModalDialoge.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;