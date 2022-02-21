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

function clickOutside(event) {
  if (event.target == menuBlure) {
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
window.addEventListener("click", function (event) {
  if (event.target == feedBackBlure) {
    feedBackModal.style.display = "none";
  }
});

const callModalOpen = document.querySelector(
  ".menu-contacts-buttons__phone-call"
);
const callModalClose = document.getElementById("call-modal__closeButton");
const callModal = document.getElementById("call-modal");
const callModalBlure = document.getElementById("call-modal__blure");

callModalOpen.addEventListener("click", function () {
  callModal.style.display = "flex";
});
callModalClose.addEventListener("click", function () {
  callModal.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target == callModalBlure) {
    callModal.style.display = "none";
  }
});

const headerCallModalOpen = document.querySelector(".header__call-button");
const headerFeedBackModalOpen = document.querySelector(".header__chat-button");

headerCallModalOpen.addEventListener("click", function () {
  callModal.style.display = "flex";
});

headerFeedBackModalOpen.addEventListener("click", function () {
  feedBackModal.style.display = "flex";
});
