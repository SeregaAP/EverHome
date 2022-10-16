//scroll header menu desktop
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
        $('.header').addClass('header_scroll');  
        $('.to-top').addClass('to-top-active'); 
    } else {
        $('.header').removeClass('header_scroll');
        $('.to-top').removeClass('to-top-active');
    }
});

//scroll to block link
const menu_links = document.querySelectorAll('.menu-link[data-goto]');
if(menu_links.length > 0){
    menu_links.forEach(menu_link =>{
      menu_link.addEventListener("click",onMenuClick);
    });
    function onMenuClick(e) {
      const menuLink = e.target;
      const menu_bottom_item = document.querySelectorAll('.header-link-item');
      menu_bottom_item.forEach(menu_itm =>{
        $(menu_itm).removeClass('active');
      });
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        $(menuLink).parent().addClass('active');
        if(menuLink.dataset.goto !='.offer'){
          if(menuLink.dataset.goto !='.page-section-33'){
            $('.header-menu_list').toggleClass("active");
            $('.burger-menu').toggleClass("active");
          }
        }
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
}

$(document).ready(() =>{
  //mask to input phone
  $(".phone").mask("+7-(999) 999-99-99");

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
  //burger btn clic to open menu
  $('.burger-menu').on('click',function(e){
    $($(this)).toggleClass("active");
    $('.header-menu_list').toggleClass("active");
  });
  //open popup manager window
  $('.btn-popup-manager').on('click',function(e){
    e.preventDefault();
    $('.popup-manager').show();
  });
  //close popup manager window
  $('.btn-close').on('click',function(e){
    const popup = $(this).attr('data-popup');
    $(popup).hide();
  });
});

$(document).on('af_complete', function(event,res) {
  if(res.success){
      $('.popup-manager').hide();
      $('.popup-accepted').show();
  }
});