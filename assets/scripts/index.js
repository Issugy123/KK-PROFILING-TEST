function loadContent(url) {
    const contentContainer = $("#content-container");
    contentContainer.addClass("loading");

    $.get(url, function (data) {
        contentContainer.html(data);
    }).fail(function () {
        contentContainer.html('<p>Error loading content. Please try again.</p>');
    }).always(function () {
        setTimeout(() => contentContainer.removeClass("loading"), 300);
    });
}
$("#create-profile").on("click", function () {
    loadContent('tite.html');
});
$(document).on("click", "#index", function () {
    loadContent('index.html');
});
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },

        520:{
            slidesPerView: 2,
        },
        720:{
            slidesPerView: 3,
        },
    }
  });