import { BASE_URL } from "./data.js";

const spinner = document.querySelector(".spinner");
function getData(endpoint) {
    fetch(`${BASE_URL}/${endpoint}`)
        .then((res) => res.json())

        .then((data) => {

            drawTable(data)

        })
        .finally(() => {
            spinner.classList.add("d-none");
           
          });
        
        }
getData("customers")


// function getDataById(endpoint, id) {
//     fetch(`${BASE_URL}/${endpoint}/${id}`)
//         .then((res) => res.json())

//         .then((data) => {

//             console.log(data);

//         }
//         )
// }
// getDataById("customers", "AROUT")


const tBody = document.querySelector("tbody");

function drawTable(arr) {
    tBody.innerHTML = "";
    arr.forEach((item) => {
        tBody.innerHTML += `
                  <tr>
                      <td>${item.id}</td>
                      <td>${item.companyName}</td>
                      <td>${item.contactTitle}</td>
                      <td>${item.address?.phone}</td>
                      <td>${item.address?.street}</td>
                      <td>${item.address?.city}, ${item.address?.country}</td>
                      <td class="d-flex gap-2">
                          <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                          <button class="edit btn btn-outline-success">edit</button>
                          <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
                      </td>
                  </tr>
              `;
    });
}

window.addEventListener('DOMContentLoaded',function(){
    getData("customers")
})

const allDeleteBtns = document.querySelectorAll(".delete");

allDeleteBtns.forEach((btn) => {
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
          deleteData("suppliers", id, this);
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

