import { removeClass } from "./removeClass.js";

let brandsSlider = null;
const windowWidthIsMiddle = window.matchMedia("(min-width: 768px)");
const buttons = document.querySelectorAll(".brands-buttons__container");
const paginationBullets = document.querySelectorAll(
  ".swiper-pagination-bullet"
);

function brandsSliderInit() {
  if (!brandsSlider) {
    brandsSlider = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

function brandsSliderDestroy() {
  if (brandsSlider) {
    brandsSlider.destroy();
    brandsSlider = null;
  }
}

function widthIsMiddle(event) {
  const swiper = document.querySelectorAll(".swiper");
  const swiperWrapper = document.querySelectorAll(".swiper-wrapper");
  const swiperSlide = document.querySelectorAll(".swiper-slide");

  if (event.matches) {
    brandsSliderDestroy();
    removeClass(swiper, "swiper");
    removeClass(swiperWrapper, "swiper-wrapper");
    removeClass(swiperSlide, "swiper-slide");
  } else {
    removeClass(swiperSlide, "hidden");
    brandsSliderInit();
  }
}

windowWidthIsMiddle.addEventListener("resize", widthIsMiddle);
widthIsMiddle(windowWidthIsMiddle);

function addMargin(collection, margin) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.margin = margin;
  }
}

addMargin(paginationBullets, "0px 12px 0px 0px");
