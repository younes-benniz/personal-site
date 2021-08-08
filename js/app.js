$(document).ready(function() {


    // shrink navbar height on scroll
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 100) {
            $('.navbar').addClass('nav-bg');
        } else {
            $('.navbar').removeClass('nav-bg');
        }
    });
    
    // Back to top action
    var button = $('#backToTop');
    button.click(function(){
        $('html, body').animate({
            scrollTop:0}, 200);
    });
    $('#home').click(function(){
        $('html, body').animate({
            scrollTop:0}, 200);
    });


    new WOW().init();
    
});
