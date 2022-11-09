const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination__body',
    clickable: true,
    type: 'custom',
    bulletClass:'swiper-pagination__box-name',
    
    
  },

  navigation: {
    nextEl: '.swiper-slide__button-next',
    prevEl: '.swiper-slide__button-prev',
  },

});

const swiper2 = new Swiper('.swiper-events', {
  loop: true,


  navigation: {
    nextEl: '.swiper-events__button-next',
    prevEl: '.swiper-events__button-prev',
  },

});