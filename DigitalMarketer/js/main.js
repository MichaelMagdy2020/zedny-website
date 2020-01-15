$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        margin: 5,
        stagePadding: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            445: {
                items: 1,
                nav: true,
                loop: true
            },
            768: {
                items: 2,
                nav: false,
                loop: true
            },
            992: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});