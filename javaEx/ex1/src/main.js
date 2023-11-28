/*
let name = "karrar";
console.log(name);


let x = 5 ;
let y = 10;

let z = x / y;

console.log(x+y);
console.log(name + x);
console.log(z);
console.log(++x);

*/

function myAwesomeFunction() {
    
console.log("sami")

};




let drink = document.getElementById("papa");

drink.innerHTML="passionFruit";
drink.className = "fruit"

console.log(drink);


let container = document.getElementById("container");
let spanTag = document.createElement("span");
spanTag.innerHTML = "hello world" ;
container.appendChild(spanTag);


let box = document.createElement("div");
let imgTag = document.createElement("img");
imgTag.src = "https://picsum.photos/id/237/200/300";

box.appendChild(imgTag);
container.appendChild(box)


function awes (text){
    console.log(text)
}

awes("hello");