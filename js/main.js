$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1025: {
            items: 4,
        },
    },
});
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 10,
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