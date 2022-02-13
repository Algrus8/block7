import { addClass } from "./addClass.js";
import { removeClass } from "./removeClass.js";

export let showHide = function (collection, button, buttonIcon, index = 0) {
  if (collection[collection.length - 1].classList.contains("hidden")) {
    removeClass(collection, "hidden");
    button.textContent = "Скрыть";
    buttonIcon.classList.add("inverted");
  } else {
    addClass(collection, "hidden", index);
    button.textContent = "Показать все";
    buttonIcon.classList.remove("inverted");
  }
};



