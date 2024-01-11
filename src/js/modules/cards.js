import { getResource } from "../services/services";

function cards (container, adress) {

    class catalogeCard {
        constructor (src, alt, dataModal, title, oldPrice, price) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.dataModal = dataModal;
            this.oldPrice = oldPrice;
            this.price = price;
        }

        render() {
            $(container).slick('slickAdd', 
                `<div class="card">
                    <div class="card__img">
                        <div class="card__pik">
                            <img src=${this.src} alt=${this.alt}>
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
                </div>`);
        }
    }
    return getResource(adress)
        .then(data => {
            data.forEach(({img, alt, dataModal, title, oldPrice, price}) => {
                new catalogeCard(img, alt, dataModal, title, oldPrice, price).render();
            });
        });
}

export default cards;