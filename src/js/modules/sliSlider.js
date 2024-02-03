function sliSlider(container) {
    $(container).slick({
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
}

export default sliSlider;