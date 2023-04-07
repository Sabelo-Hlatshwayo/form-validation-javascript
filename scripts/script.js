"use strict";

import {
    form,
    username,
    email,
    firstPassword,
    secondPassword,
    inputs,
} from "./selectors.js";

import {
    minUsernameLength,
    maxUsernameLength,
    minPasswordLength,
    maxPasswordLength,
    regularExpression,
} from "./constants.js";

function displayErrorOutline(element) {
    element.style.outline = "0.2rem solid #e74c3c";
}

function displaySuccessOutline(element) {
    element.style.outline = "0.2rem solid #2ecc71";
}

function getInputField(element) {
    return element.type === "password"
        ? element.name.charAt(0).toUpperCase() + element.name.slice(1)
        : element.id.charAt(0).toUpperCase() + element.id.slice(1);
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
    } else if (trimmedElement.length > maximum) {
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
    const trimmedEmail = email.value.trim();

    if (regularExpression.test(trimmedEmail)) {
        hideErrorMessage(email);
        displaySuccessOutline(email);
    } else {
        displayErrorMessage(email, "Email is not valid");
        displayErrorOutline(email);
    }
}

function validateMatchingPasswords() {
    if (firstPassword.value !== secondPassword.value) {
        displayErrorMessage(secondPassword, "Passwords do not match");
        displayErrorOutline(secondPassword);
    } else {
        hideErrorMessage(secondPassword);
        displaySuccessOutline(secondPassword);
    }
}

function checkRequiredInputs() {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            displayErrorMessage(input, `${getInputField(input)} is required`);
            displayErrorOutline(input);
        }
    });
}

form.addEventListener("submit", (e) => {
    // Prevent the default behaviour when the form is submitted
    e.preventDefault();

    // Validate the length of the username
    validateLength(username, minUsernameLength, maxUsernameLength);
    // Validate the format of the email
    validateEmail();
    // Validate the length of the first password
    validateLength(firstPassword, minPasswordLength, maxPasswordLength);
    // Validate the second password
    validateMatchingPasswords();
    // Check all required inputs
    checkRequiredInputs();
});
