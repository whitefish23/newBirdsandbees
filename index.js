//---Swiper main

const btn = document.querySelectorAll('.swiper-pagination__box-name')

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
  

  on: {
    slideChange(swiper) {
      const target = [...btn][swiper.activeIndex - 1]
      btn.forEach(function (button) {
        button.classList.remove("swiper-pagination__box-name--active")
      })
      target.classList.add("swiper-pagination__box-name--active")
    }
  }

});

//---swiper meet

swiperEvents = new Swiper('.swiper-meetings', {
  loop: false,

  slidesPerView: 1.5,
  spaceBetween: 40,
  centeredSlides: false,
  
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
  
  },


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


//--sweiper reports

const swiperPhoto = new Swiper('.swiper-photo', {
  slidesPerView: 1,
  spaceBetween: 10,
 
  breakpoints: {
    
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    940: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  
 
});

//---halls tabs

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

//--- scroll in halls

document.querySelectorAll('.halls__tabs').forEach((buttonX) => {
  buttonX.addEventListener('click', function() {
    const parentX = this.parentNode.getBoundingClientRect().x
    const elmX = this.getBoundingClientRect().x
    const delta = elmX - parentX
    console.log(delta)
  })
})

//---menu-mob

document.querySelector('.left-btn').addEventListener('click', function() {
  this.classList.toggle('left-btn--active')        
 });
 
 let btnActv = document.querySelector('.left-btn')
 let menuActv = document.querySelector('.left-menu')
 let bodyAct = document.querySelector('.body')
 
 btnActv.addEventListener('click', function (event) {
   event.stopPropagation();
  
   bodyAct.classList.toggle('body--active');
   menuActv.classList.toggle('left-menu--active');
 });
 
 menuActv.addEventListener('click', function (e) {
   e.stopPropagation();
 });
 
 bodyAct.addEventListener('click', function () {
   bodyAct.classList.remove('body--active');
 });
 
 bodyAct.addEventListener('click', function () {
   btnActv.classList.remove('left-btn--active');
 });
 
 bodyAct.addEventListener('click', function () {
   btnActv.classList.remove('left-menu--active');
 });