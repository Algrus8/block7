import { addClass } from "./addClass.js";
import { removeClass } from "./removeClass.js";

const buttons = document.querySelectorAll(".brands-buttons__container");
const brandsShowAll = document.querySelector(".brands-show-all__button");
const paginationBullets = document.querySelectorAll(
  ".swiper-pagination-bullet"
);

const windowWidthIsLarge = window.matchMedia("(min-width: 1120px)");
const windowWidthIsMiddle = window.matchMedia("(min-width: 768px)");

function widthDeviceChange(e) {
  if (e.matches) {
    buttons[6].classList.remove("hidden");
    buttons[7].classList.remove("hidden");
  } else {
    buttons[6].classList.add("hidden");
    buttons[7].classList.add("hidden");
  }
}

windowWidthIsLarge.addEventListener("resize", widthDeviceChange);
widthDeviceChange(windowWidthIsLarge);

// brandsShowAll.addEventListener("click", function (evt) {
//   evt.preventDefault();

//   const showAllButton = document.querySelector(".brands-show-all__button");
//   const showAllIcon = document.querySelector(".brands-show-all__icon-img");

//   if (windowWidthIsLarge.matches) {
//     console.log("here1");
//     if (buttons[buttons.length - 1].classList.contains("hidden")) {
//       removeClass(buttons, "hidden");
//       showAllButton.textContent = "Скрыть";
//       showAllIcon.classList.add("inverted");
//     } else {
//       addClass(buttons, "hidden", 8);
//       showAllButton.textContent = "Показать все";
//       showAllIcon.classList.remove("inverted");
//     }
//   } else {
//     console.log("here2");

//     if (buttons[buttons.length - 1].classList.contains("hidden")) {
//       removeClass(buttons, "hidden");
//       showAllButton.textContent = "Скрыть";
//       showAllIcon.classList.add("inverted");
//     } else {
//       addClass(buttons, "hidden", 6);
//       showAllButton.textContent = "Показать все";
//       showAllIcon.classList.remove("inverted");
//     }
//   }
// });

function addMargin(collection, margin) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.margin = margin;
  }
}

addMargin(paginationBullets, "0px 12px 0px 0px");

// windowWidthIsMiddle.addEventListener("resize", function (evt) {
//   evt.preventDefault();
//   const priceTime = document.querySelector(".price__time");
//   if (windowWidthIsMiddle.matches) {
//     priceTime.remove();
//   }
// });
const priceTime = document.querySelector(".price__time");
// priceTime.outerHTML = priceTime.innerHTML;