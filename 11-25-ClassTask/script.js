import { BASE_URL, getAllData } from "./data.js";

async function displayCards() {
    let blogData = await getAllData("blogs");
    const container = document.getElementById('blogCardsContainer');
    blogData.forEach(blog => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Author: ${blog.author}</h6>
                    <p class="card-text">${blog.body}</p>
                    <a href="#" class="card-link">Read more</a>
                    <button class="delete btn btn-outline-danger mt-3" data-id="${blog.id}">Delete</button>
                    <button class="edit btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#edit-modal" data-id="${blog.id}">Edit</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    attachEventListeners();
}

displayCards();

function attachEventListeners() {
    const allDelete = document.querySelectorAll(".delete");
    console.log(allDelete);

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
                    deleteData("blogs", id, this);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        timer: 1000,
                    });
                }
            });
        });
    });
}

function deleteData(endpoint, id, button) {
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                button.closest(".card").remove();
            } else {
                console.log("Error deleting item");
            }
        })
        .catch((err) => {
            console.error("Error deleting data:", err);
        });
}



async function handleSearch(event) {
    event.preventDefault(); 

    const searchInput = document.querySelector('input[type="search"]').value.toLowerCase(); 
    const blogCards = document.querySelectorAll('.card'); 

    blogCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const body = card.querySelector('.card-text').textContent.toLowerCase(); 

       
        if (title.includes(searchInput) || body.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'; 
        }
    });
}


document.querySelector('form').addEventListener('submit', handleSearch);
