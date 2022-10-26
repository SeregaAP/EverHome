//scroll header menu desktop
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
        $('.header').addClass('header_scroll');  
        $('.to-top').addClass('to-top-active'); 
        $('.wrap-container-header-mobile').addClass('header-mobile-scroll');
    } else {
        $('.header').removeClass('header_scroll');
        $('.to-top').removeClass('to-top-active');
        $('.wrap-container-header-mobile').removeClass('header-mobile-scroll');
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
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
      nextArrow: $('.partners-sl-next'),
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
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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

  //mobile header popu button click to open popup
  $('.btn-inf-phone').on('click',function(e){
    $('.pop-inf-phone').toggle();
  });
  //burger btn clic to open menu
  $('.burger-menu').on('click',function(e){
    $($(this)).toggleClass("active");
    $('.header-menu_list').toggleClass("active");
  });
  //open popup manager window
  $('.btn-popup-manager').on('click',function(e){
    $('body').css('overflow-y','hidden');
    e.preventDefault();
    $('.variant-modal').css('display','none');
    $('.popup-manager').show();
  });
  //close popup manager window
  $('.btn-close').on('click',function(e){
    $('body').css('overflow-y','scroll');
    const popup = $(this).attr('data-popup');
    $(popup).hide();
  });
  ////////////currency monay btn click
  $('.btn-money').on('click',function(e){
    e.preventDefault();
    $('.btn-money').removeClass('active');
    $($(this)).addClass('active');
    var currency = $(this).attr('data-monay');
    var data_currency = $('.detail');
    $(data_currency).each(function( index,value){
      if(currency == "rub"){
        $(value).children(".price").text($(value).attr("data-rubl")+ " ₽");
      }
      if(currency == "fun"){
        $(value).children(".price").text($(value).attr("data-funt")+ " £");
      }
      if(currency == "evr"){
        $(value).children(".price").text($(value).attr("data-evro")+ " €");
      }
      if(currency == "dol"){
        $(value).children(".price").text($(value).attr("data-dollar")+ " $");
      }
      //console.log(value);
    });
  });
  ///////////tabs content control btn
  var max_count_tab = 4;
  if (window.screen.width <= 1024) {
    max_count_tab = 3;
  }
  if (window.screen.width <= 600) {
    max_count_tab = 2;
  }
  var orientation = "next";
  $('.galery-tabs-control-btn').on('click',function(e){
    var txt_count = $(this).parent();
    txt_count = $(txt_count).children('.galery-tabs-control-txt');
    txt_count = $(txt_count).children('.galery-tabs-control-count');
    var id_btn = $(this).attr('id');
    var galery_tabs = $('.galery-tabs-content.active');
    var counts = $(galery_tabs).attr("data-tabs_count");
    if(id_btn == "tabs-cnt-next"){
      counts = $(galery_tabs).attr("data-tabs_count");
      if(orientation == "back"){
        counts--;
        orientation = "next";
      }
      var variant_galery_itm = $(galery_tabs).children(".variants-galery-itm");
      var length = $(galery_tabs).children().length;
      counts++;
      if(counts > length - max_count_tab){
        counts = length - max_count_tab;
        $(galery_tabs).attr("data-tabs_count",counts);
        return;
      }
      $(variant_galery_itm[counts]).css("display","none");
      $(txt_count).text("0" + parseInt(counts + max_count_tab));
      $(galery_tabs).attr("data-tabs_count",counts);
    }

    if(id_btn == "tabs-cnt-back"){
      counts = $(galery_tabs).attr("data-tabs_count");
      if(orientation == "next"){
        counts++;
        orientation = "back";
      }
      var variant_galery_itm = $(galery_tabs).children(".variants-galery-itm");
      var length = $(galery_tabs).children().length;
      counts--;
      if(counts < 0){
        counts = 0;
        $(galery_tabs).attr("data-tabs_count",counts);
        return;
      }
      $(variant_galery_itm[counts]).css("display","block");
      $(txt_count).text("0"+ parseInt(counts + (max_count_tab-1)));
      $(galery_tabs).attr("data-tabs_count",counts);
    }
    //console.log($(galery_tabs).children().length);
  });
  ////////////////////////////////////////////////////////////////////////////////////

  $('.tabs-open').on('click',function(e){
    e.preventDefault();
    $('.galery-tabs-content').removeClass('active');
    $('.tabs-open').removeClass('active');
    $($(this)).addClass('active');
    $('.galery-tabs-control-length').text("0" + $($(this).attr('href')).children('.variants-galery-itm').length);
    $('.galery-tabs-control-count').text("0"+ (max_count_tab -1));
    $($(this).attr('href')).addClass('active');
  });

  //////////slider initialization
  function variantSliderInit(){
    $('.galery-tabs-control-length').text("0" + $(".galery-tabs-content.active").children('.variants-galery-itm').length);
    $('.galery-tabs-control-count').text("0" + (max_count_tab -1));
    var parent = $('.variants-galery-itm');
    var arrParent = [];
    $(parent).each(function( index,value) {
      var imglength = $(value).children('.variants-galery-itm-sl');
      imglength = $(imglength).children('.variants-galery-itm-images');
      var Length = $(imglength).children('img').length;
      var itemCount = $(value).children('.variants-galery-itm-txt');
      itemCount = $(itemCount).children('.slider-nav-info');
      itemCount = $(itemCount).children('.slider-nav-counter');
      $(itemCount).children('.slider-length').text("0"+Length);
      $(itemCount).children('.slider-count').text("04");
    });
  }
  variantSliderInit();
  $('.slider-nav-next').on('click',function(e){
    var parent = $(e.target).closest(".variants-galery-itm");
    var items = $(parent).children('.variants-galery-itm-sl');
    var preview = $(items).children('.variants-galery-itm-preview');
    items = $(items).children('.variants-galery-itm-images');
    var dataCount = items;
    var count = dataCount.attr('data-count');

    items = $(items).children('img');
    $(items).removeClass('active');
    count++;
    if(count > items.length - 1){
      count = items.length -1;
      dataCount.attr('data-count',count);
      $(items[count]).addClass('active');
      return;
    }
    if(count > 3){
      $(items[count - 4]).css('display','none');
    }
    $(preview).attr('src',$(items[count]).attr('src'));
    $(items[count]).addClass('active');
    dataCount.attr('data-count',count);
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $('.slider-nav-back').on('click',function(e){
    var parent = $(e.target).closest(".variants-galery-itm");
    var items = $(parent).children('.variants-galery-itm-sl');
    var preview = $(items).children('.variants-galery-itm-preview');
    items = $(items).children('.variants-galery-itm-images');
    var dataCount = items;
    var count = dataCount.attr('data-count');

    items = $(items).children('img');
    $(items).removeClass('active');
    count--;
    if(count < 0){
      count = 0;
      dataCount.attr('data-count',count);
      $(items[count]).addClass('active');
      return;
    }

   var l = items.length;
   if(count < (l - 4)){
      $(items[count]).css('display','block');
    }
    $(preview).attr('src',$(items[count]).attr('src'));
    $(items[count]).addClass('active');
    dataCount.attr('data-count',count);
  });
  ////////////////////////////////////////////////////////////////////////////////////////////

  //block variants modal
  $('.variant-modal-close').on('click',function(e){
    $('body').css('overflow-y','scroll');
    $('.variant-modal').css('display','none');
  });
  $('.btn-detail').on('click',function(e){
    e.preventDefault();
    $('body').css('overflow-y','hidden');
    var parent = $(e.target).closest(".variants-galery-itm");
    var description = $(parent).attr('data-desc');
    var galery = $(parent).children('.variants-galery-itm-sl');
    var txt = $(parent).children('.variants-galery-itm-txt');
    var detail = $(txt).children('.detail');

    $('.price-modal').text($(detail).children('.price').text());
    $('.bed-room-modal').text($(detail).children('.room-count').text());
    $('.quadrature-modal').text($(detail).children('.square').text());
    $('.room-count-modal').text($(txt).children('p').text());
    $('.variant-modal-desc p').text(description);
    $('.variant-modal-title').text($(txt).children('h5').text());
    galery = $(galery).children('.variants-galery-itm-images');
    var length_galery_itm = $(galery).children().length;
    galery = $(galery).children('.variants-itm-sl-img');
    //create galery item image to parent
    $('.variant-modal-slider_image').children().remove();
    $('.slider-info-length').text("0"+length_galery_itm);
    $('.slider-info-counter').text("04");
    $('.modal-preview-img').attr('src',$(galery[0]).attr('src'));
    var newImage = [];
    for(i=0;i < length_galery_itm;i++){
      newImage.push(document.createElement('img'));
      $(newImage[i]).attr('src',$(galery[i]).attr('src'));
      $(newImage[i]).addClass('variant-md-itm');
      $(newImage[i]).on('click',showImagePreview);
      $('.variant-modal-slider_image').append($(newImage[i]));
    }
    $('.variant-modal').css('display','flex');
  });
  $('.variant-md-itm').on('click',function(e){
    $('.modal-preview-img').attr('src',$(this).attr('src'));
  });
  function showImagePreview(){
    $('.modal-preview-img').attr('src',$(this).attr('src'));
  }
  var orient = "next";
  $('.var-mod-sl-btn').on('click',function(e){
    var parent = $(e.target).closest(".variant-modal-slider-content");
    var galery = $(parent).children('.variant-modal-slider-content');
    galery = $(parent).children('.variant-modal-slider_image');
    galery = $(galery).children('.variant-md-itm');
    var id_btn = $(this).attr('id');
    var counts = $('.variant-modal-slider_image').attr('data-cnt');
    if(id_btn == "cnt-next"){
      if(orient == "back"){
        counts--;
        orient = "next";
      }
      var length = galery.length;
      counts++;
      if(counts > length - 5){
        counts = length - 5;
        $('.variant-modal-slider_image').attr('data-cnt',counts);
        return;
      }
      $(galery[counts]).css("display","none");
      $('.variant-modal-slider_image').attr('data-cnt',counts);
      $('.slider-info-counter').text("0"+parseInt(counts + 5));
      //console.log(counts);
    }

    if(id_btn == "cnt-back"){
      if(orient == "next"){
        counts++;
        orient = "back";
      }
      var length = galery.length;
      counts--;
      if(counts < 0){
        counts = 0;
        $('.variant-modal-slider_image').attr('data-cnt',counts);
        return;
      }
      $(galery[counts]).css("display","block");
      $('.variant-modal-slider_image').attr('data-cnt',counts);
      $('.slider-info-counter').text("0"+parseInt(counts + 4));
      //console.log(counts);
    }
    
  });
  
});

$(document).on('af_complete', function(event,res) {
  if(res.success){
      $('body').css('overflow-y','scroll');
      $('.popup-manager').hide();
      $('.popup-accepted').show();
  }
});