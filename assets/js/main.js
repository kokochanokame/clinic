//ナビゲーション


        

    $(".toggle__btn").on('click', function (){
        $(this).toggleClass('open');
        $('.header__logo').toggleClass('open');
        $('.header').toggleClass('open');
        $('.nav').toggleClass('open');
    });


//swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});