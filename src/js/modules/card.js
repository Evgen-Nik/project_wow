import { getResource } from "../services/services";

function card () {

    class catalogeCard {
        constructor (src, altImg, dataModal, title, oldPrice, price) {
            this.src = src;
            this.altImg = altImg;
            this.title = title;
            this.dataModal = dataModal;
            this.oldPrice = oldPrice;
            this.price = price;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('card');
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
        }
    }
    getResource('http://localhost:3000/cataloge')
        .then(data => {
            data.forEach(({img, altimg, dataModal, title, oldPrice, price}) => {
                new catalogeCard(img, altimg, dataModal, title, oldPrice, price).render();
            });
        });
}

export default card;