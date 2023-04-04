"use strict";

const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const btnSubmit = document.querySelector(".btnSubmit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("FORM HAS BEEN SUBMITTED!!!");
});
