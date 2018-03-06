(function () {
  $(document).ready(function () {
    $('.intro__slider').slick({
      centerMode: true,
      dots: true,
      autoplay: true,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplaySpeed: 4000,
      centerPadding: '0px',
      slidesToShow: 1,
      nextArrow: '<button type="button" class="slider-button-next">Next</button>',
      prevArrow: '<button type="button" class="slider-button-prev">Next</button>',
    });
  });
})();
