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

const emailError = "Email is not valid";

function displayErrorOutline(element) {
    element.style.outline = "0.2rem solid #e74c3c";
}

function displaySuccessOutline(element) {
    element.style.outline = "0.2rem solid #2ecc71";
}

// Validate the username
function validateUsername() {
    const trimmedUsername = username.value.trim().length;
}

// Validate the email
function validateEmail() {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const trimmedEmail = email.value.trim();

    if (re.test(trimmedEmail)) {
        email.nextElementSibling.innerHTML = "&nbsp;";
        email.nextElementSibling.style.visibility = "visible";
        email.style.outline = "0.2rem solid #2ecc71";
    } else {
        email.nextElementSibling.innerHTML = emailError;
        email.nextElementSibling.style.visibility = "visible";
        email.style.outline = "0.2rem solid #e74c3c";
    }
}

form.addEventListener("submit", (e) => {
    validateLength(username, minUsernameLength, maxUsernameLength);

    e.preventDefault();
    validateUsername();
    // validateEmail();
});
