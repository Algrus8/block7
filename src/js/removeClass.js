export const removeClass = function (collection, classToRemove) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove(classToRemove);
  }
};
