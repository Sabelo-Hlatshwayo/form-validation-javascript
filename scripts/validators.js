import {
    displayErrorOutline,
    displaySuccessOutline,
    getInputField,
    displayErrorMessage,
    hideErrorMessage,
} from "./helpers.js";

import { regularExpression } from "./constants.js";
import { inputs } from "./selectors.js";

// Validate the length of the user input on an input field
export function validateLength(element, minimum, maximum) {
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
export function validateEmail() {
    const trimmedEmail = email.value.trim();

    if (regularExpression.test(trimmedEmail)) {
        hideErrorMessage(email);
        displaySuccessOutline(email);
    } else {
        displayErrorMessage(email, "Email is not valid");
        displayErrorOutline(email);
    }
}

// Validate whether or not the passwords match
export function validateMatchingPasswords() {
    if (firstPassword.value !== secondPassword.value) {
        displayErrorMessage(secondPassword, "Passwords do not match");
        displayErrorOutline(secondPassword);
    } else {
        hideErrorMessage(secondPassword);
        displaySuccessOutline(secondPassword);
    }
}

// Validate whether or not the user has entered data into the required input fields
export function checkRequiredInputs() {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            displayErrorMessage(input, `${getInputField(input)} is required`);
            displayErrorOutline(input);
        }
    });
}
