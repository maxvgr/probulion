import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import MicroModal from 'micromodal';

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const catalog = document.querySelector(".mobile-catalog");
const hiddenmenu = document.querySelector(".mobile-catalog__hidden-menu");
const popup = document.querySelector(".footer-mail__popup");
const popupmailopen = document.querySelector(".mail-popup__open");
const popupclose = document.querySelector(".footer-mail__close");
const popupcard = document.querySelector(".footer-card__popup");
const popupcardclose = document.querySelector(".footer-card__close");
const popupcardclosebtn = document.querySelector(".footer-card__close--button");
const popupcardopen = document.querySelector(".card-popup__open");
const searchbtn = document.querySelector(".search__button");
const search = document.querySelector(".header__search");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  // overlay.classList.toggle("is-active");
});

catalog.addEventListener("click", () => {
  hiddenmenu.classList.toggle("is-active");
  catalog.classList.toggle("is-active");
  // overlay.classList.toggle("is-active");
});

// if (popupmailopen) {
//   if (popupmailopen.getAttribute('listener') !== 'true') {
//     popupmailopen.addEventListener("click", () => {
//       popup.classList.toggle("is-active");
//     });
//   }

//   if (popupclose.getAttribute('listener') !== 'true') {
//     popupclose.addEventListener("click", () => {
//       popup.classList.toggle("is-active");
//     });
//   }
// }

// if (popupcardopen) {
//   if (popupcardopen.getAttribute('listener') !== 'true') {
//     popupcardopen.addEventListener("click", () => {
//       popupcard.classList.toggle("is-active");
//     });
//   }

//   if (popupcardclose.getAttribute('listener') !== 'true') {
//     popupcardclose.addEventListener("click", () => {
//       popupcard.classList.toggle("is-active");
//     });
//   }

//   if (popupcardclosebtn.getAttribute('listener') !== 'true') {
//     popupcardclosebtn.addEventListener("click", () => {
//       popupcard.classList.toggle("is-active");
//     });
//   }
// }


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

searchbtn.addEventListener("click", () => {
  search.classList.toggle("is-active");
});

MicroModal.init();