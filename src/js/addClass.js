export let addClass = function (collection, classToAdd, startIndex = 0) {
  for (let i = startIndex; i < collection.length; i++) {
    collection[i].classList.add(classToAdd);
  }
};
