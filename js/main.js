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
        prevArrow: $('.bt-next'),
        nextArrow: $('.bt-back')
    });
});