
import { products } from "./data.js";
const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
            <td><img src="${product.image}" width="100"/></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.rating.rate}</td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
        `;

    tBody.appendChild(trElem);
  });

}
searchInput.addEventListener("input", function (event) {
    console.log(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(event.target.value.trim())
  );

  drawTable(filteredProducts);
});
drawTable(products)