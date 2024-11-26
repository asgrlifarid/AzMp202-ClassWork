import { BASE_URL } from "./data.js";
import { endpoint } from "./data.js";

let products = [];  
let editingProductId = null; 

function displayProducts(productsData) {
    const tableB = document.querySelector(".product-table tbody");
    tableB.innerHTML = ""; 

    if (Array.isArray(productsData)) {
        products = productsData; 
        productsData.forEach(product => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.description}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="btn-edit" data-id="${product.id}">Edit</button>
                    <button class="btn-delete" data-id="${product.id}">Delete</button>
                </td>
            `;
            
            tableB.appendChild(row);
        });

        attachEventListeners();
    } else {
        console.error("Invalid data format", productsData);
    }
}

fetch(`${BASE_URL}${endpoint.products}`)
    .then(res => res.json()) 
    .then(data => {
        console.log(data); 
        displayProducts(data.products || data); 
    })
    .catch(err => console.error("Error fetching data:", err));

function deleteData(id, button) {
    fetch(`${BASE_URL}${endpoint.products}/${id}`, {
        method: "DELETE", 
    })
    .then((response) => {
        if (response.ok) {
            button.closest("tr").remove(); 
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 2500,
            });
        } else {
            console.log("Error deleting item");
        }
    })
    .catch((err) => {
        console.error("Error deleting data:", err);
    });
}
function attachEventListeners() {
    const allDelete = document.querySelectorAll(".btn-delete");
    const allEdit = document.querySelectorAll(".btn-edit");

    allDelete.forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteData(id, this); 
                }
            });
        });
    });

    allEdit.forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");

            const productToEdit = products.find(product => product.id == id);

            if (productToEdit) {
                
                document.getElementById("name").value = productToEdit.name;
                document.getElementById("price").value = productToEdit.price;
                document.getElementById("description").value = productToEdit.description;
                document.getElementById("stock").value = productToEdit.stock;
                document.getElementById("image").value = productToEdit.image;

              
                document.getElementById("cancelBtn").style.display = "inline-block";
                editingProductId = productToEdit.id; 
            }
        });
    });
}


const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const newProduct = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        stock: document.getElementById("stock").value,
        image: document.getElementById("image").value
    };

    if (editingProductId) {
        
        fetch(`${BASE_URL}${endpoint.products}/${editingProductId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Product updated:", data);
            displayProducts(data.products || data);  
            Swal.fire({
                title: "Product Updated!",
                text: "Your product has been updated successfully.",
                icon: "success",
                timer: 1000,
            });

            
            productForm.reset();
            document.getElementById("cancelBtn").style.display = "none";
            editingProductId = null;
        })
        .catch(err => {
            console.error("Error updating product:", err);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while updating the product.",
                icon: "error",
            });
        });
    } else {

        fetch(`${BASE_URL}${endpoint.products}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Product added:", data);
            displayProducts(data.products || data);  
            Swal.fire({
                title: "Product Added!",
                text: "Your product has been added successfully.",
                icon: "success",
                timer: 3000,
            });


            productForm.reset();
        })
        .catch(err => {
            console.error("Error adding product:", err);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while adding the product.",
                icon: "error",
            });
        });
    }
});


document.getElementById("cancelBtn").addEventListener("click", () => {

    productForm.reset();
    document.getElementById("cancelBtn").style.display = "none";
    editingProductId = null;
});

