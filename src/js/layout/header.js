import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const catalog = document.querySelector(".mobile-catalog");
const hiddenmenu = document.querySelector(".mobile-catalog__hidden-menu");
const popup = document.querySelector(".footer-mail__popup");
const popupclose = document.querySelector(".footer-mail__close");
const popupcard = document.querySelector(".footer-card__popup");
const popupcardclose = document.querySelector(".footer-card__close");
const popupcardclosebtn = document.querySelector(".footer-card__close--button");
const popupcardopen = document.querySelector(".card-popup__open");


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

popupclose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

popupcardopen.addEventListener("click", () => {
  popupcard.classList.toggle("is-active");
});

popupcardclose.addEventListener("click", () => {
  popupcard.classList.toggle("is-active");
});

popupcardclosebtn.addEventListener("click", () => {
  popupcard.classList.toggle("is-active");
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
