!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){},function(e,t){var n=document.querySelector(".burger__button"),r=document.querySelector(".menu-header__close-menu"),o=document.querySelector(".menu"),d=document.querySelector(".menu__blure");n.addEventListener("click",(function(){o.style.display="block"})),r.addEventListener("click",(function(){o.style.display="none"})),window.addEventListener("click",(function(e){e.target==d&&(o.style.display="none")}));var c=document.querySelector(".menu-contacts-buttons__chat"),l=document.querySelector(".modal-feedback__close-button"),i=document.querySelector(".modal-feedback"),a=document.querySelector(".modal-feedback__blure");c.addEventListener("click",(function(){i.style.display="flex"})),l.addEventListener("click",(function(){i.style.display="none"})),window.addEventListener("click",(function(e){e.target==a&&(i.style.display="none")}));var s=document.querySelector(".menu-contacts-buttons__phone-call"),u=document.getElementById("call-modal__closeButton"),m=document.getElementById("call-modal"),p=document.getElementById("call-modal__blure");s.addEventListener("click",(function(){m.style.display="flex"})),u.addEventListener("click",(function(){m.style.display="none"})),window.addEventListener("click",(function(e){e.target==p&&(m.style.display="none")}));var y=document.querySelector(".header__call-button"),b=document.querySelector(".header__chat-button");y.addEventListener("click",(function(){m.style.display="flex"})),b.addEventListener("click",(function(){i.style.display="flex"}))},function(e,t){var n=document.querySelector(".price"),r=window.matchMedia("(min-width: 768px)");window,r.matches&&(n.style.display="none",n.insertAdjacentHTML("beforebegin",'<div id="price-table" class="price">\n    <table class="price__table">\n      <thead>\n        <tr>\n          <th>Ремонтные услуги</th>\n          <th>Цена</th>\n          <th>Срок</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody class="price__table-body">\n        <tr>\n          <td>Диагностика</td>\n          <td>Бесплатно</td>\n          <td>30 мин</td>\n          <td ><button class="price__table-button" title="Заказать"><img src="/src/assets/img/Group-10.png" alt="Заказать"></button>\n          </td>\n        </tr>\n        <tr>\n          <td>Замена дисплея</td>\n          <td>1 000 ₽</td>\n          <td>30-120 мин</td>\n          <td ><button class="price__table-button" title="Заказать"><img src="./src/assets/img/Group-10.png" alt="Заказать"></button>\n          </td>\n        </tr>\n        <tr>\n          <td>Замена полифонического динамика</td>\n          <td>1 000 ₽</td>\n          <td>30-120 мин</td>\n          <td ><button class="price__table-button" title="Заказать"><img src="/src/assets/img/Group-10.png" alt="Заказать"></button>\n          </td>\n        </tr>\n\n        <tr>\n          <td>Тестирование с выдачей технического заключения</td>\n          <td>1 000 ₽</td>\n          <td>30-120 мин</td>\n          <td ><button class="price__table-button" title="Заказать"><img src="/src/assets/img/Group-10.png" alt="Заказать"></button>\n          </td>\n        </tr>\n\n        <tr>\n          <td>Замена программного обеспечения</td>\n          <td>1 000 ₽</td>\n          <td>30-120 мин</td>\n          <td ><button class="price__table-button" title="Заказать"><img src="/src/assets/img/Group-10.png" alt="Заказать"></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>'))},function(e,t,n){"use strict";n.r(t);n(1);var r=function(e,t){for(var n=0;n<e.length;n++)e[n].classList.remove(t)},o=null,d=window.matchMedia("(min-width: 768px)"),c=(document.querySelectorAll(".brands-buttons__container"),document.querySelectorAll(".swiper-pagination-bullet"));function l(e){var t=document.querySelectorAll(".swiper"),n=document.querySelectorAll(".swiper-wrapper"),d=document.querySelectorAll(".swiper-slide");e.matches?(o&&(o.destroy(),o=null),r(t,"swiper"),r(n,"swiper-wrapper"),r(d,"swiper-slide")):(r(d,"hidden"),o||(o=new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:0,freeMode:!1,pagination:{el:".swiper-pagination",clickable:!0}})))}d.addEventListener("resize",l),l(d),function(e,t){for(var n=0;n<e.length;n++)e[n].style.margin=t}(c,"0px 12px 0px 0px");var i=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=n;r<e.length;r++)e[r].classList.add(t)},a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Показать все";e[e.length-1].classList.contains("hidden")?(r(e,"hidden"),t.textContent="Скрыть",n.classList.add("inverted")):(i(e,"hidden",o),t.textContent=d,n.classList.remove("inverted"))},s=document.querySelector(".type-of-texnic-show-all"),u=document.querySelector(".brands-show-all"),m=document.querySelector(".content__read-more"),p=window.matchMedia("(min-width: 1120px)");function y(){var e=document.querySelectorAll(".brands-buttons__container");p.matches?(e[6].classList.remove("hidden"),e[7].classList.remove("hidden")):(e[6].classList.add("hidden"),e[7].classList.add("hidden"))}function b(){var e=document.querySelectorAll(".type-of-texnic__element");p.matches?e[4].classList.remove("hidden"):e[4].classList.add("hidden")}s.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelectorAll(".type-of-texnic__element"),n=document.querySelector(".type-of-texnic-show-all__button"),r=document.querySelector(".type-of-texnic-show-all__icon");p.matches?a(t,n,r,4):a(t,n,r,3)})),u.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelectorAll(".brands-buttons__container"),n=document.querySelector(".brands-show-all__button"),r=document.querySelector(".brands-show-all__icon");p.matches?a(t,n,r,8):a(t,n,r,6)})),m.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(".read-more__button"),n=document.querySelector(".read-more__button-icon"),r=document.querySelectorAll(".body__text");a(r,t,n,1,"Читать далее")})),window.addEventListener("resize",y),y(window),window.addEventListener("resize",b),b(window);n(2),n(3)}]);
//# sourceMappingURL=bundle.js.map