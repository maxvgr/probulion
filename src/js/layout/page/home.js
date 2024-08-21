import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Navigation,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper/modules";


new Swiper("#slider .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  // spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#slider .swiper-button-next",
    prevEl: "#slider .swiper-button-prev",
  },

  // pagination: {
  //   el: '#slider .swiper-pagination',
  //   clickable: true,
  // },
});

new Swiper("#popular .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1.1,
    },
    360: {
      slidesPerView: 2.15,
    },
    740: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 5.15,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#popular .swiper-button-next",
    prevEl: "#popular .swiper-button-prev",
  },

  // pagination: {
  //   el: '#slider .swiper-pagination',
  //   clickable: true,
  // },
});

new Swiper("#products-all .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1.1,
    },
    360: {
      slidesPerView: 2.15,
    },
    740: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 5.15,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#products-all .swiper-button-next",
    prevEl: "#products-all .swiper-button-prev",
  },

});