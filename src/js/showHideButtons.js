import { showHide } from "./showHide";

const typeOfTexnicShowAll = document.querySelector('.type-of-texnic-show-all');
const brandsShowAll = document.querySelector('.brands-show-all');
const readMore = document.querySelector('.content__read-more')

typeOfTexnicShowAll.addEventListener("click", function (evt) {
  evt.preventDefault();
  const typesOfTexnicCollection = document.querySelectorAll(
    ".type-of-texnic__element"
  );
  const typeOfTexnicShowAllButton = document.querySelector(".type-of-texnic-show-all__button");
  const typeOfTexnicIcon = document.querySelector(
    ".type-of-texnic-show-all__icon"
  );

  showHide(typesOfTexnicCollection, typeOfTexnicShowAllButton, typeOfTexnicIcon, 3);
});

brandsShowAll.addEventListener('click', function(evt){
  evt.preventDefault();
  const brandsCollection = document.querySelectorAll('.brands-buttons__container');
  const brandsShowAllButton = document.querySelector('.brands-show-all__button');
  const brandsIcon = document.querySelector('.brands-show-all__icon');
  
  showHide(brandsCollection,brandsShowAllButton,brandsIcon, 6)
})



readMore.addEventListener('click', function(evt){
  evt.preventDefault();
  const readMoreButton = document.querySelector('.read-more__button');  
  const readMoreIcon = document.querySelector('.read-more__button-icon');
  const readMoreCollection = document.querySelectorAll('.body__text');
  console.log(readMoreCollection)
  
  showHide(readMoreCollection,readMoreButton,readMoreIcon, 1)
})

  