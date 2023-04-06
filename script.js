"use strict";

const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const btnSubmit = document.querySelector(".btnSubmit");

const minUsernameLength = 3;
const maxUsernameLength = 15;

const emailError = "Email is not valid";

function displayErrorOutline(element) {
    element.style.outline = "0.2rem solid #e74c3c";
}

function displaySuccessOutline(element) {
    element.style.outline = "0.2rem solid #2ecc71";
}

function getInputField(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

function displayErrorMessage(element, message) {
    element.nextElementSibling.style.visibility = "visible";
    element.nextElementSibling.innerHTML = message;
}

function hideErrorMessage(element) {
    element.nextElementSibling.innerHTML = "&nbsp;";
    element.nextElementSibling.style.visibility = "hidden";
}

function validateLength(element, minimum, maximum) {
    const trimmedElement = element.value.trim();

    if (trimmedElement.length < minimum) {
        displayErrorMessage(
            element,
            `${getInputField(element)} must be at least ${minimum} characters`
        );
        displayErrorOutline(element);
    } else if (trimmedElement.length >= maximum) {
        displayErrorMessage(
            element,
            `${getInputField(element)} must be less than ${maximum} characters`
        );
        displayErrorOutline(element);
    } else {
        hideErrorMessage(element);
        displaySuccessOutline(element);
    }
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
    e.preventDefault();

    validateLength(username, minUsernameLength, maxUsernameLength);
    // validateEmail();
});
