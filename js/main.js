$(".owl-carousel").owlCarousel({
    loop: true,

    nav: false,
    responsive: {
        0: {
            items: 2,
            margin: 8,
        },
        600: {
            items: 2,
            margin: 30,
        },
        1000: {
            items: 3,
            margin: 30,
        },
        1025: {
            items: 4,
            margin: 30,
        },
    },
});
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    breakpoints: {
        414: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});