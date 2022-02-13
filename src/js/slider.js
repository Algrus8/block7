import { removeClass } from "./removeClass.js";


let brandsSlider = null;
const windowWidthIsMiddle = window.matchMedia("(min-width: 768px)");
const buttons = document.querySelectorAll(".brands-buttons__container");

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

function widthIsMiddle(e) {
  const swiper = document.querySelectorAll(".swiper");
  const swiperWrapper = document.querySelectorAll(".swiper-wrapper");
  const swiperSlide = document.querySelectorAll(".swiper-slide");

  if (e.matches) {
    brandsSliderDestroy();
    removeClass(swiper, "swiper");
    removeClass(swiperWrapper, "swiper-wrapper");
    removeClass(swiperSlide, "swiper-slide");
  } else {
    // buttons[6].classList.remove("hidden");
    // buttons[7].classList.remove("hidden");
    removeClass(swiperSlide, "hidden")
    brandsSliderInit();
  }
}

windowWidthIsMiddle.addEventListener("resize", widthIsMiddle);
widthIsMiddle(windowWidthIsMiddle);
