"use strict"

let ul = document.querySelector("ul");


document.querySelector(".add").addEventListener("click", function () {
    let input = document.querySelector(".input-text");
    let text = input.value;
    if (text.trim() == "") {
        document.querySelector(".validation").classList.remove("d-none");
        return;
    } else {
        document.querySelector(".validation").classList.add("d-none");
    }
    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-square-xmark", "align-icon")
    li.classList.add("list-group-item", "align-li");
    li.innerText = text;
    ul.append(li);
    li.append(icon);


    icon.addEventListener("click", function () {
        ul.removeChild(li);
    })
    input.value = "";
})