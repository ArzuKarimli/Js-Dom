"use strict"
let box = document.querySelector(".box");
let lamp = document.querySelector(".lamp");

lamp.addEventListener("click", function () {
    if (!box.classList.contains("light-dark-mood")) {
        box.classList.add("light-dark-mood");
        box.classList.remove("dark-mood");
    } else {
        box.classList.add("dark-mood");
        box.classList.remove("light-dark-mood");
    }

    if (!lamp.classList.contains("bulb")) {
        lamp.classList.toggle("bulb");
        lamp.classList.toggle("fa-bulb-white");
    }
});