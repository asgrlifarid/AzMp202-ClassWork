import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js"
const registerForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const userNameInput = document.querySelector("#user-name");
const passwordInput = document.querySelector("#my-pw");

const users = getDataFromLocalStorage("users") || [];
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

const user={
    id: Date.now(),
    username:userNameInput.value.trim(),
    email:emailInput.value.trim(),
    password: passwordInput.value(),
};

users.push(user);
  setDataToLocalStorage("users", users);
  window.location.replace("login.html");
  resetForm()

})

  function resetForm() {
    registerForm.reset();
  }