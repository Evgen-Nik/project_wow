import { getResource } from "../services/services";

function cards () {

    class catalogeCard {
        // constructor (src, altImg, dataModal, title, oldPrice, price, id, descr, parentSelector1, parentSelector2, ...classes) {
        constructor (src, altImg, dataModal, title, oldPrice, price, parentSelector1, ...classes) {
            this.src = src;
            this.altImg = altImg;
            this.title = title;
            this.dataModal = dataModal;
            this.oldPrice = oldPrice;
            this.price = price;
            // this.id = id;
            // this.descr = descr;
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
            // data.forEach(({img, altimg, dataModal, title, oldPrice, price, id, descr}) => {
            data.forEach(({img, altimg, dataModal, title, oldPrice, price}) => {
                // new catalogeCard(img, altimg, dataModal, title, oldPrice, price, id, descr, ".cataloge .container .cataloge__slider", ".cardDetails").render();
                new catalogeCard(img, altimg, dataModal, title, oldPrice, price, ".cataloge .container .cataloge__slider").render();
            });
        });
}

export default cards;