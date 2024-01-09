require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

// import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import sliSlider from './modules/sliSlider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    // Маска ввода номера

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    // Timer

    const modalTimerID = setTimeout(() => openModal('.modal-consultation', modalTimerID), 20000);

    // Modules

    modal('[data-modal=consultation]', '.modal-consultation', modalTimerID);
    modal('[data-modal=activation]', '.modal-activation');


    for (let i = 1; i <= 10; i++) {
        modal(`[data-modal=c${i}]`, `#c${i}`);
    }

    for (let i = 1; i <= 10; i++) {
        modal(`[data-modal=b${i}]`, `#b${i}`);
    }

    forms('.form-consultation', '.modal-consultation', '.dialog-consultation', modalTimerID, 'http://localhost:3000/callback');
    forms('.form-activation', '.modal-activation', '.dialog-activation', modalTimerID, 'http://localhost:3000/activate');

    // cards();

    sliSlider('.cataloge__slider');

});
