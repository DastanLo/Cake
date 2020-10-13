import Swiper, {Navigation, Pagination} from 'swiper';
import './scss/index.scss';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.circle-container', {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 0,
    },
  }
});

const swiper3 = new Swiper('.choice-container', {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 0,
    },
  }
});
