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
    displayErrorOutline,
    displaySuccessOutline,
    getInputField,
    displayErrorMessage,
    hideErrorMessage,
} from "./helpers.js";

import {
    minUsernameLength,
    maxUsernameLength,
    minPasswordLength,
    maxPasswordLength,
    regularExpression,
} from "./constants.js";

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
