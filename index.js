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


const tabsBtn = document.querySelectorAll('.halls__tabs');
const tabsItems = document.querySelectorAll('.halls__card-section');

tabsBtn.forEach(function(button) {
  button.addEventListener('click', function() {

    let currentBtn = button;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);


    tabsBtn.forEach(function(button) {
      button.classList.remove('halls__tabs--active')
    });

    tabsItems.forEach(function(button) {
      button.classList.remove('halls__card-section--active')
    });



    currentBtn.classList.add('halls__tabs--active');
    currentTab.classList.add('halls__card-section--active')

  });
})

document.querySelector('.halls__tabs').click();



document.querySelectorAll('.halls__tabs').forEach((buttonX) => {
  buttonX.addEventListener('click', function() {
    const parentX = this.parentNode.getBoundingClientRect().x
    const elmX = this.getBoundingClientRect().x
    const delta = elmX - parentX
    console.log(delta)
  })
})