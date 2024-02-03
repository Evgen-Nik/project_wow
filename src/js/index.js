require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import modal from './modules/modal';
import forms from './modules/forms';
import cardDetails from './modules/cardDetails';
import cards from './modules/cards';
import sliSlider from './modules/sliSlider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    const modalTimerID = setTimeout(() => openModal('.modal-consultation', modalTimerID), 60000);

    modal('[data-modal=consultation]', '.modal-consultation', modalTimerID);
    modal('[data-modal=activation]', '.modal-activation');

    forms('.form-consultation', '.modal-consultation', '.dialog-consultation', modalTimerID, 'http://localhost:3000/callback');
    forms('.form-activation', '.modal-activation', '.dialog-activation', modalTimerID, 'http://localhost:3000/activate');

    sliSlider('.cataloge__slider');
    sliSlider('.boxes__slider');

    cards('.cataloge__slider', 'http://localhost:3000/cataloge');
    cards('.boxes__slider', 'http://localhost:3000/boxes');

    cardDetails('http://localhost:3000/cataloge')
        .then(() => {
            forModal('c');
        });
    cardDetails('http://localhost:3000/boxes')
        .then(() => {
            forModal('b');
        });

    function forModal(name) {
        for (let i = 1; i <= 10; i++) {
            modal(`[data-modal=${name}${i}]`, `#${name}${i}`);
        }
    };
});
