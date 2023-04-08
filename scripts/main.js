"use strict";

import { form, username, firstPassword } from "./selectors.js";

import {
    minUsernameLength,
    maxUsernameLength,
    minPasswordLength,
    maxPasswordLength,
} from "./constants.js";

import {
    validateLength,
    validateEmail,
    validateMatchingPasswords,
    checkRequiredInputs,
} from "./validators.js";

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
