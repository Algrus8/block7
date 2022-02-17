const menuOpenButton = document.querySelector(".burger__button");
const menuCloseButton = document.querySelector(".menu-header__close-menu");
const menuModal = document.querySelector(".menu");
const menuBlure = document.querySelector(".menu__blure");

menuOpenButton.addEventListener("click", openModal);
menuCloseButton.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  menuModal.style.display = "block";
}

function closeModal() {
  menuModal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == menuBlure) {
    menuModal.style.display = "none";
  }
}

const feedBackOpen = document.querySelector(".menu-contacts-buttons__chat");
const feedBackClose = document.querySelector(".modal-feedback__close-button");
const feedBackModal = document.querySelector(".modal-feedback");
const feedBackBlure = document.querySelector(".modal-feedback__blure");

feedBackOpen.addEventListener("click", function () {
  feedBackModal.style.display = "flex";
});
feedBackClose.addEventListener("click", function () {
  feedBackModal.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target == feedBackBlure) {
    feedBackModal.style.display = "none";
  }
});

const callModalOpen = document.querySelector('.menu-contacts-buttons__phone-call');
const callModalClose = document.getElementById('call-modal__closeButton');
const callModal = document.getElementById('call-modal');
const callModalBlure = document.getElementById('call-modal__blure');

callModalOpen.addEventListener("click", function () {
  callModal.style.display = "flex";
});
callModalClose.addEventListener("click", function () {
  callModal.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target == callModalBlure) {
    callModal.style.display = "none";
  }
});

const headerCallModalOpen = document.querySelector('.header__call-button')
const headerFeedBackModalOpen = document.querySelector('.header__chat-button')

headerCallModalOpen.addEventListener("click", function () {
  callModal.style.display = "flex";
});

headerFeedBackModalOpen.addEventListener("click", function () {
  feedBackModal.style.display = "flex";
});





// const $ = {};

// function _createModal(options) {
//   const modal = document.createElement("div");
//   modal.classList.add("menu");
//   modal.insertAdjacentHTML(
//     "afterbegin",
//     ` <div class="menu-overlay">
// 	 <div class="menu-wrapper">
// 		<header class="menu-header">
// 		  <button class="menu-header__close-menu" title="Закрыть меню"><img src="img/burger.png"
// 				alt="Закрыть меню"></button>
// 		  <div class="menu-header__logo"><a href="#" title="На главную"><img src="img/Group.png" alt="Логотип компании"></a>
// 		  </div>
// 		  <button class="menu-header__menu-search" title="Поиск"><img src="img/search.png" alt="Поиск"></button>
// 		</header>
// 		<nav class="menu-navigation">
// 		  <li class="menu-navigation__element1 menu-navigation-element"><a href="#" title="Ремонт техники">Ремонт
// 				техники</a></li>
// 		  <li class="menu-navigation__element2 menu-navigation-element"><a href="#" title="Услуги и сервисы">Услуги и
// 				сервисы</li>
// 		  <li class="menu-navigation__element3 menu-navigation-element"><a href="#"
// 				title="Корпоративным клиентам">Корпоративным клиентам</li>
// 		  <li class="menu-navigation__element4 menu-navigation-element"><a href="#" title="Продавцам техники">Продавцам
// 				техники</li>
// 		  <li class="menu-navigation__element5 menu-navigation-element"><a href="#" title="Партнерам">Партнерам</a></li>
// 		  <li class="menu-navigation__element6 menu-navigation-element"><a href="#"
// 				title="Производителям">Производителям</a></li>
// 		  <li class="menu-navigation__element7 menu-navigation-element"><a href="#" title="Наши сервисные центры">Наши
// 				сервисные центры</a></li>
// 		  <li class="menu-navigation__element8 menu-navigation-element"><a href="#" title="Контакты">Контакты</a></li>
// 		</nav>
// 		<div class="menu-footer-down"></div>
// 		<div class="menu-footer">
// 		  <div class="menu-footer__contacts-buttons menu-contacts-buttons">
// 			 <button class="menu-contacts-buttons__phone-call" title="Телефонный звонок"><img src="img/call.png"
// 				  alt="Телефонный звонок"></button>
// 			 <button class="menu-contacts-buttons__chat" title="Чат"><img src="img/chat.png" alt="Чат"></button>
// 			 <button class="menu-contacts-buttons__profile" title="Профиль"><img src="img/profile.png"
// 				  alt="Профиль"></button>
// 		  </div>
// 		  <a href="mailto:mail@cps.com" class="menu-footer__email" title="Почта">mail@cps.com</a>
// 		  <a href="tel:88008908900" class="menu-footer__phone-number" title="Позвонить">8 800 890 8900</a>
// 		  <div class="menu-footer__language-switch-buttons menu-language-switch-buttons">
// 			 <button class="menu-language-switch-buttons" title="Русский язык">RU</button>
// 			 <button class="menu-language-switch-buttons" title="Английский язык">EN</button>
// 			 <button class="menu-language-switch-buttons" title="Китайский язык">CH</button>
// 		  </div>
// 		</div>
// 	 </div>
//   </div>`
//   );
//   document.body.appendChild(modal);
//   return modal;
// }

// $.modal = function (options) {
//   const $modal = _createModal(options);

//   return {
//     open() {
//       $modal.classList.add("open");
//     },
//     close() {
//       $modal.classList.add("open");
//     },
//     destroy() {},
//   };
// };

// const modal = $.modal()
