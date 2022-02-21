import { addClass } from "./addClass.js";
import { removeClass } from "./removeClass.js";

export const showHide = function (
  collection,
  button,
  buttonIcon,
  index = 0,
  text = "Показать все"
) {
  if (collection[collection.length - 1].classList.contains("hidden")) {
    removeClass(collection, "hidden");
    button.textContent = "Скрыть";
    buttonIcon.classList.add("inverted");
  } else {
    addClass(collection, "hidden", index);
    button.textContent = text;
    buttonIcon.classList.remove("inverted");
  }
};
