function Person() {
    name = "";
    age = "";
    race = "";
}

// Define the onload function

let sami = new Person();

sami.name = "sami"
sami.age= "15"
sami.race="white"

console.log(sami)




const p = document.createElement("p");

p.textContent = "Name: " + sami.name + ", Age: " + sami.age + ", Race: " + sami.race;

document.body.appendChild(p);

localStorage.setItem("me",JSON.stringify(sami))
const samiIsh = localStorage.getItem("sami") // we got a string not obj
let sami = json.parse(samiIsh) //make the item that we got from a string to a obj
    
