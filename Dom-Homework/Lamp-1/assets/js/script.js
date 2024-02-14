"use strict"

let lightBox=document.querySelector(".turn-on")
let darkBox=document.querySelector(".turn-off");
let box=document.querySelector(".box");
let lamp=document.querySelector(".fa-solid")

lightBox.addEventListener("click",function(){
    if(!box.classList.contains("light-dark-mood")){
        box.classList.add("light-dark-mood")
        box.classList.remove("dark-mood")
    }
    if(!lamp.classList.contains("bulb")){
        lamp.classList.add("bulb")
        lamp.classList.remove("fa-bulb-white")
    }
})
darkBox.addEventListener("click",function(){
    if(!box.classList.contains("dark-mood")){
        box.classList.add("dark-mood")
        box.classList.remove("light-dark-mood")
       
    }
    if(!lamp.classList.contains("fa-bulb-white")){
        lamp.classList.add("fa-bulb-white")
        lamp.classList.remove("bulb")
    }
})
// let box = document.querySelector(".box");
// let lamp = document.querySelector(".lamp");

// lamp.addEventListener("click", function () {
//     if (!box.classList.contains("light-dark-mood")) {
//         box.classList.add("light-dark-mood");
//         box.classList.remove("dark-mood");
//     } else {
//         box.classList.add("dark-mood");
//         box.classList.remove("light-dark-mood");
//     }

//     if (!lamp.classList.contains("bulb")) {
//         lamp.classList.toggle("bulb");
//         lamp.classList.toggle("fa-bulb-white");
//     }
// });