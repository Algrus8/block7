const price = document.querySelector(".price");
const windowWidthIsMiddle = window.matchMedia("(min-width: 768px)");

function priceChange() {
  if (windowWidthIsMiddle.matches) {
    price.style.display = "none";
    price.insertAdjacentHTML(
      "beforebegin",
      `<div id="price-table" class="price">
    <table class="price__table">
      <thead>
        <tr>
          <th>Ремонтные услуги</th>
          <th>Цена</th>
          <th>Срок</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="price__table-body">
        <tr>
          <td>Диагностика</td>
          <td>Бесплатно</td>
          <td>30 мин</td>
          <td ><button class="price__table-button" title="Заказать"><img src="img/Group-10.png" alt="Заказать"></button>
          </td>
        </tr>
        <tr>
          <td>Замена дисплея</td>
          <td>1 000 ₽</td>
          <td>30-120 мин</td>
          <td ><button class="price__table-button" title="Заказать"><img src="img/Group-10.png" alt="Заказать"></button>
          </td>
        </tr>
        <tr>
          <td>Замена полифонического динамика</td>
          <td>1 000 ₽</td>
          <td>30-120 мин</td>
          <td ><button class="price__table-button" title="Заказать"><img src="img/Group-10.png" alt="Заказать"></button>
          </td>
        </tr>

        <tr>
          <td>Тестирование с выдачей технического заключения</td>
          <td>1 000 ₽</td>
          <td>30-120 мин</td>
          <td ><button class="price__table-button" title="Заказать"><img src="img/Group-10.png" alt="Заказать"></button>
          </td>
        </tr>

        <tr>
          <td>Замена программного обеспечения</td>
          <td>1 000 ₽</td>
          <td>30-120 мин</td>
          <td ><button class="price__table-button" title="Заказать"><img src="img/Group-10.png" alt="Заказать"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`
    );
  }
}

priceChange(window);
