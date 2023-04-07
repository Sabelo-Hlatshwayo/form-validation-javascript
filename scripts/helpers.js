export function displayErrorOutline(element) {
    element.style.outline = "0.2rem solid #e74c3c";
}

export function displaySuccessOutline(element) {
    element.style.outline = "0.2rem solid #2ecc71";
}

export function getInputField(element) {
    return element.type === "password"
        ? element.name.charAt(0).toUpperCase() + element.name.slice(1)
        : element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

export function displayErrorMessage(element, message) {
    element.nextElementSibling.style.visibility = "visible";
    element.nextElementSibling.innerHTML = message;
}

export function hideErrorMessage(element) {
    element.nextElementSibling.innerHTML = "&nbsp;";
    element.nextElementSibling.style.visibility = "hidden";
}
