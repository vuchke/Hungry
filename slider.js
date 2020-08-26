$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.slider'),
    autoplay: true,
  });
});

// gallery
$(document).ready(function(){
  $('.gallery-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  });
});

$('.gallery-slider').slickLightbox();