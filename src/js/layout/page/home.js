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
  modules: [Pagination, Autoplay],

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