import { showHide } from "./showHide";

const typeOfTexnicShowAll = document.querySelector(".type-of-texnic-show-all");
const brandsShowAll = document.querySelector(".brands-show-all");
const readMore = document.querySelector(".content__read-more");
const windowWidthIsLarge = window.matchMedia("(min-width: 1120px)");

typeOfTexnicShowAll.addEventListener("click", function (event) {
  event.preventDefault();
  const typesOfTexnicCollection = document.querySelectorAll(
    ".type-of-texnic__element"
  );
  const typeOfTexnicShowAllButton = document.querySelector(
    ".type-of-texnic-show-all__button"
  );
  const typeOfTexnicIcon = document.querySelector(
    ".type-of-texnic-show-all__icon"
  );

  if (windowWidthIsLarge.matches) {
    showHide(
      typesOfTexnicCollection,
      typeOfTexnicShowAllButton,
      typeOfTexnicIcon,
      4
    );
  } else {
    showHide(
      typesOfTexnicCollection,
      typeOfTexnicShowAllButton,
      typeOfTexnicIcon,
      3
    );
  }
});

brandsShowAll.addEventListener("click", function (event) {
  event.preventDefault();
  const brandsCollection = document.querySelectorAll(
    ".brands-buttons__container"
  );
  const brandsShowAllButton = document.querySelector(
    ".brands-show-all__button"
  );
  const brandsIcon = document.querySelector(".brands-show-all__icon");

  if (windowWidthIsLarge.matches) {
    showHide(brandsCollection, brandsShowAllButton, brandsIcon, 8);
  } else {
    showHide(brandsCollection, brandsShowAllButton, brandsIcon, 6);
  }
});

readMore.addEventListener("click", function (event) {
  event.preventDefault();
  const readMoreButton = document.querySelector(".read-more__button");
  const readMoreIcon = document.querySelector(".read-more__button-icon");
  const readMoreCollection = document.querySelectorAll(".body__text");

  showHide(readMoreCollection, readMoreButton, readMoreIcon, 1, "Читать далее");
});

function quantityBrands() {
  const buttons = document.querySelectorAll(".brands-buttons__container");
  if (windowWidthIsLarge.matches) {
    buttons[6].classList.remove("hidden");
    buttons[7].classList.remove("hidden");
  } else {
    buttons[6].classList.add("hidden");
    buttons[7].classList.add("hidden");
  }
}

window.addEventListener("resize", quantityBrands);
quantityBrands(window);

function quantityTypes() {
  const typesOfTexnicCollection = document.querySelectorAll(
    ".type-of-texnic__element"
  );
  if (windowWidthIsLarge.matches) {
    typesOfTexnicCollection[4].classList.remove("hidden");
  } else {
    typesOfTexnicCollection[4].classList.add("hidden");
  }
}

window.addEventListener("resize", quantityTypes);
quantityTypes(window);
