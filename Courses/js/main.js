$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        margin: 15,
        stagePadding: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            445: {
                items: 2,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

    // =================================

    $(".my-rating").starRating({
        starSize: 15,
        callback: function (currentRating, $el) {
            // make a server call here
        }
    });
});