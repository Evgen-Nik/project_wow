import card from "./card";

function sliSlider(container) {
    $(container).slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        //   // You can unslick at a given breakpoint now by adding:
        //   // settings: "unslick"
        //   // instead of a settings object
        // ]
    });

    const newSlide = card();

    $(container).slick('slickAdd', newSlide);

    // $(container).slick('slickAdd',
    // `<div class="card">
    //     <div class="card__img">
    //         <div class="card__pik">
    //             <img src="images/pack-img.png" alt="">
    //         </div>
    //         <div class="card__btns">
    //             <button data-modal='b10' class="btn">Подробнее</button>
    //             <button class="btn">Купить</button>
    //         </div>
    //     </div>
    //     <div class="card__descr">
    //         <div class="card__title title title_fz20">В мире эмоций</div>
    //         <span class="card__old-price">6 900 ₽</span>
    //         <span class="card__price title title_fz20">5 000 ₽</span>
    //     </div>
    // </div>`);
}

export default sliSlider;