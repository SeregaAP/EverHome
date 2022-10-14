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