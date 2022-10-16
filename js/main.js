//scroll header menu desktop
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
        $('.header').addClass('header_scroll');  
        //$('.to-top').addClass('to-top-active'); 
    } else {
        $('.header').removeClass('header_scroll');
        //$('.to-top').removeClass('to-top-active');
    }
});

$(document).ready(() =>{
    gsap.registerPlugin(ScrollTrigger);
gsap.to('.bounce',{
  scrollTrigger:{
    trigger: '.bounce',
    toggleActions: 'restart pause reverse pause'
  },
  x: 250,
  y: -100,
  scale:1,
  opacity:1,
  duration: 3,
});
gsap.to('.bounce2',{
  scrollTrigger:{
    trigger: '.bounce2',
    toggleActions: 'restart pause reverse pause'
  },
  x: -220,
  y: -130,
  scale:0.6,
  delay:1,
  opacity:1,
  duration: 5,
});
    
    $('.btn-header').on('click',function(e){
        var popup = $(this).data('option');
        $(popup).toggle();
    });
    //offer slider
    $('.offer__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.offer_sl-next'),
        nextArrow: $('.offer_sl-back')
    });
    //adwentage slider
    $('.adwentage-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.adwentage-slider-next'),
        nextArrow: $('.adwentage-slider-back')
    });
    //sertificate slider
    $('.certificate-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'10px',
        autoplay: true,
        arrow:true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode:false,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode:false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:false,
            }
          }
        ]
    });
    //partners slider
    $('.partners_slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: $('.partners-sl-back'),
      nextArrow: $('.partners-sl-next')
  });
});