import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";
const loginForm = document.querySelector("form");
const userNameOrEmailInput = document.querySelector("#username-email");
const passwordInput = document.querySelector("#my-pw");



const users = getDataFromLocalStorage("users") || [];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let password = passwordInput.value.trim();
  let userNameOrEmail = userNameOrEmailInput.value.trim();
  const foundUser = users.find(
    (user) =>
      user.password === password &&
      (user.userName === userNameOrEmail || user.email === userNameOrEmail)
  );


  if (foundUser) {
    foundUser.isLogged = true;
    setDataToLocalStorage("users", users);
    window.location.replace("index.html");
  } else {
    window.alert("yo sehvdir!");
  }
});

function resetForm() {
  registerForm.reset();
}