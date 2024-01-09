window.addEventListener('DOMContentLoaded', () => {
    

    //Валидация форм

    // function validateForms(form) {
    //     $(form).validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             }
    //         },
    //         messages: {
    //             name: {
    //                 required: "Пожалуйста, введите свое имя",
    //                 minlength: jQuery.validator.format("Введите минимум {0} символа!")
    //             },
    //             phone: "Пожалуйста, введите свой номер телефона",
    //             email: {
    //               required: "Пожалуйста, введите свою почту",
    //               email: "Неправильно введен адрес почты"
    //             }
    //         }
    //     });
    // };

    // validateForms('#consultation-form');
    // validateForms('#consultation form');
    // validateForms('#activation-form');
    // validateForms('#activation form');
    

    // Маска ввода номера

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    //

    // open-close Modal

    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('hide');
        modal.classList.remove('show');
        // document.body.style.overflow = '';
    }
    
    function openModal(modalSelector, modalTimerID) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        // document.body.style.overflow = 'hidden';
        if (modalTimerID) {
            clearInterval(modalTimerID);
        }
    }

    //

    const modalTimerID = setTimeout(() => openModal('.modal-consultation', modalTimerID), 20000);

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
        });
    
        return await res.json();
    };
    
    const getResource = async (url) => {
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };


    //

   
    
    function modal (triggerSelector, modalSelector, modalTimerID) {
    
       const modalTrigger = document.querySelectorAll(triggerSelector),
             modal = document.querySelector(modalSelector);
       
       modalTrigger.forEach(btn => {
           btn.addEventListener('click', () => openModal(modalSelector, modalTimerID));
       });
    
       modal.addEventListener('click', (e) => {
           if(e.target === modal || e.target.getAttribute('data-close') == '') {
               closeModal(modalSelector);
           }
       });
    
       document.addEventListener('keydown', (e) => {
           if (e.code === 'Escape' && modal.classList.contains('show')) {
               closeModal(modalSelector);
           }
       });
    
    //    function showModalByScroll() {
    //        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    //            openModal(modalSelector, modalTimerID);
    //            window.removeEventListener('scroll', showModalByScroll);
    //        } 
    //    }
    
    //    window.addEventListener('scroll', showModalByScroll);
    }

    modal('[data-modal=consultation]', '.modal-consultation', modalTimerID);
    modal('[data-modal=activation]', '.modal-activation');

    modal('[data-modal=c1]', '#c1');
    modal('[data-modal=c2]', '#c2');
    modal('[data-modal=c3]', '#c3');
    modal('[data-modal=c4]', '#c4');
    modal('[data-modal=c5]', '#c5');
    modal('[data-modal=c6]', '#c6');
    modal('[data-modal=c7]', '#c7');
    modal('[data-modal=c8]', '#c8');
    modal('[data-modal=c9]', '#c9');
    modal('[data-modal=c10]', '#c10');

    modal('[data-modal=b1]', '#b1');
    modal('[data-modal=b2]', '#b2');
    modal('[data-modal=b3]', '#b3');
    modal('[data-modal=b4]', '#b4');
    modal('[data-modal=b5]', '#b5');
    modal('[data-modal=b6]', '#b6');
    modal('[data-modal=b7]', '#b7');
    modal('[data-modal=b8]', '#b8');
    modal('[data-modal=b9]', '#b9');
    modal('[data-modal=b10]', '#b10');


    // Forms

    function forms (formSelector, modalSelector, dialogSelector, modalTimerID, adress) {
    
        const forms = document.querySelectorAll(formSelector);
    
        const message = {
            loading: 'images/spinner.svg',
            success: 'Спасибо! Скоро мы с Вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
    
        forms.forEach (item => {
            bindPostData(item);
        });
    
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
    
                form.insertAdjacentElement('afterend', statusMessage);
    
                const formData = new FormData(form);
    
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
                postData(adress, json) 
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            });
        }
    
        function showThanksModal(message) {
            const prevModalDialog = document.querySelector(dialogSelector);
    
            prevModalDialog.classList.add('hide');
            openModal(modalSelector, modalTimerID);
    
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>&times;</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
    
            document.querySelector(modalSelector).append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                // prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal(modalSelector);
            }, 4000);
        }
    }
    
    forms('.form-consultation', '.modal-consultation', '.dialog-consultation', modalTimerID, 'http://localhost:3000/callback');
    forms('.form-activation', '.modal-activation', '.dialog-activation', modalTimerID, 'http://localhost:3000/activate');


    // Cards

    function cards () {

        class catalogeCard {
            // constructor (src, altImg, dataModal, title, oldPrice, price, id, descr, parentSelector1, parentSelector2, ...classes) {
            constructor (src, altImg, dataModal, title, oldPrice, price, id, descr, parentSelector1, ...classes) {
                this.src = src;
                this.altImg = altImg;
                this.title = title;
                this.dataModal = dataModal;
                this.oldPrice = oldPrice;
                this.price = price;
                this.id = id;
                this.descr = descr;
                this.parent1 = document.querySelector(parentSelector1);
                // this.parent2 = document.querySelector(parentSelector2);
                this.classes = classes;
            }

            render() {
                const element = document.createElement('div');
                if(this.classes.length === 0) {
                    this.element = 'card';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                    <div class="card__img">
                        <div class="card__pik">
                            <img src=${this.src} alt=${this.altImg}>
                        </div>
                        <div class="card__btns">
                            <button data-modal=${this.dataModal} class="btn">Подробнее</button>
                            <button class="btn">Купить</button>
                        </div>
                    </div>
                    <div class="card__descr">
                        <div class="card__title title title_fz20">${this.title}</div>
                        <span class="card__old-price">${this.oldPrice} ₽</span>
                        <span class="card__price title title_fz20">${this.price} ₽</span>
                    </div>
                `;
                this.parent1.append(element);
                
                // const elemDescr = document.createElement('div');
                // if(this.classes.length === 0) {
                //     this.elemDescr = 'cardDetail';
                //     elemDescr.classList.add(this.elemDescr);
                // } else {
                //     this.classes.forEach(className => elemDescr.classList.add(className));
                // }
                // elemDescr.innerHTML = `
                //     <div class="details" id=${this.id}>
                //         <div class="details__wrapper">
                //             <div class="details__content">
                //                 <div class="details__close" data-close>&times;</div>
                //                 <div class="details__title">${this.title}</div>
                //                 <div class="details__descr">
                //                     ${this.descr}</div>
                //             </div>
                //         </div>
                //     </div>
                // `;
                // this.parent.append(elemDescr);
            }
        }
        getResource('http://localhost:3000/cataloge')
            .then(data => {
                data.forEach(({img, altimg, dataModal, title, oldPrice, price, id, descr}) => {
                    // new catalogeCard(img, altimg, dataModal, title, oldPrice, price, id, descr, ".cataloge .container .cataloge__slider", ".cardDetails").render();
                    new catalogeCard(img, altimg, dataModal, title, oldPrice, price, id, descr, ".cataloge .container .cataloge__slider").render();
                });
            });
    }

    // cards();


    // slick slider

    $('.cataloge__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });
});