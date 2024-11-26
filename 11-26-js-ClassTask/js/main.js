import { BASE_URL } from "./data.js";

async function getData() {
    try {
        const res = await axios.get(`${BASE_URL}products`);
        displayCard(res.data);
        setupSearch(res.data);
    } catch (error) {
        console.error("Error", error);
    }
}

function displayCard(products) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    products.forEach(item => {
        container.innerHTML += `
         <div class="card">
                <img src="${item.image}" alt="${item.name}" class="card-image">
                <div class="card-content">
                    <h2 class="card-name">${item.name}</h2>
                    <p class="card-description">${item.description}</p>
                    <p class="card-price">$${item.price}</p>
                </div>
            </div>
        `;
    });
}

function setupSearch(products) {
    const searchInput = document.querySelector(".input_text");


    searchInput.addEventListener("input", function (event) {
        const item = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(item) ||
            product.description.toLowerCase().includes(item)
        );
        displayCard(filteredProducts);
    });
}

getData(); 
