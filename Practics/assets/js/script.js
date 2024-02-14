"use strict"

//let h1=document.getElementsByTagName("h1");
//  let elems = document.getElementsByClassName("test");
// for (const item of elems) {
//     console.log(item);
// }

// let elem=document.getElementById("h1");
// console.log(elem);

let elem = document.querySelector(".text")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// elem.innerText="salamlar";
// elem.innerText="<h1>salamlar</h1>";

// elem.style.color="red";
// elem.style.backgroundColor="blue";
// elem.style.padding="50px";

// elem.className="Salam";

// elem.classList.add("salam");
// elem.classList.remove("test2");

// if(elem.classList.contains("salam")){
//     elem.classList.remove("salam")
// }

// if(elem.classList.contains("test2")){
//     elem.classList.remove("test2")
// }


// let btn=document.querySelector(".add");
// console.log(btn);

// btn.onclick=function(){
//     alert("salamalar");
// }
// btn.onclick=function(){
//     alert("Necesuz?");
// }

// let firstElem=document.querySelector(".first");
// let secondElem=document.querySelector(".second");
// let box=document.querySelector(".text")

// firstElem.addEventListener("click",function(){
//     // box.style.backgroundColor="red"

//     if(!box.classList.contains("first-color")){
//         box.classList.add("first-color")
//         box.classList.remove("second-color")

//     }


// })
// secondElem.addEventListener("click",function(){
//     // box.style.backgroundColor="yellow"


//     if(!box.classList.contains("second-color")){
//         box.classList.add("second-color")
//         box.classList.remove("first-color")
//     }
// })

let ul = document.querySelector("ul");


document.querySelector(".add").addEventListener("click", function () {
    let input = document.querySelector(".input-text");
    let text = input.value;
    if (text.trim() == "") {
        document.querySelector(".validation").classList.remove("d-none");
        return;
    }else{
        document.querySelector(".validation").classList.add("d-none");
    }
   

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
    input.value = "";

})
