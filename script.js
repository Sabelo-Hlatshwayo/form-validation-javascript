"use strict";

const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const btnSubmit = document.querySelector(".btnSubmit");

const minUsernameLength = 3;
const maxUsernameLength = 15;
const minUsernameError = "Username must be at least 3 characters";
const maxUsernameError = "Username must be less than 15 characters";

// Validate the username
function validateUsername() {
    const trimmedUsername = username.value.trim().length;

    if (trimmedUsername < minUsernameLength) {
        username.nextElementSibling.innerHTML = minUsernameError;
        username.nextElementSibling.style.visibility = "visible";
        username.style.outline = "0.2rem solid #e74c3c";
    } else if (trimmedUsername >= maxUsernameLength) {
        username.nextElementSibling.innerHTML = maxUsernameError;
        username.nextElementSibling.style.visibility = "visible";
        username.style.outline = "0.2rem solid #e74c3c";
    } else {
        username.nextElementSibling.innerHTML = "&nbsp;";
        username.nextElementSibling.style.visibility = "visible";
        username.style.outline = "0.2rem solid #2ecc71";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateUsername();
});
