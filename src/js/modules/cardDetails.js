import { getResource } from "../services/services";

function cardDetails (adress) {

    class details {
        constructor (title, id, descr, parentSelector, ...classes) {
            this.title = title;
            this.id = id;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const elemDescr = document.createElement('div');
            if(this.classes.length === 0) {
                this.elemDescr = 'cardDetail';
                elemDescr.classList.add(this.elemDescr);
            } else {
                this.classes.forEach(className => elemDescr.classList.add(className));
            }
            elemDescr.innerHTML = `
                <div class="details" id=${this.id}>
                    <div class="details__wrapper">
                        <div class="details__content">
                            <div class="details__close" data-close>&times;</div>
                            <div class="details__title">${this.title}</div>
                            <div class="details__descr">
                                ${this.descr}</div>
                        </div>
                    </div>
                </div>
            `;
            this.parent.append(elemDescr);
        }
    }
    return getResource(adress)
        .then(data => {
            data.forEach(({title, id, descr}) => {
                new details(title, id, descr, ".cardDetails").render();
            });
        });
}

export default cardDetails;