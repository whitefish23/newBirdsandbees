const swiperMain = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination__body',
    clickable: true,
    type: 'custom',
    bulletClass: 'swiper-pagination__box-name',
    


  },

  navigation: {
    nextEl: '.swiper-slide__button-next',
    prevEl: '.swiper-slide__button-prev',
  },

});

swiperEvents = new Swiper('.swiper-meetings', {
  loop: false,

  slidesPerView: 3,
  spaceBetween: 31,
  centeredSlides: false,


  navigation: {
    nextEl: '.meetings__button-next',
    prevEl: '.meetings__button-prev',
  },

  scrollbar: {
    el: '.meetings-scrollbar',
    dragSize: 74,
    draggable: true,
  }


});