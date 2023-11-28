import "../css/style.css";

let food = ["pizza", "sush", "taco"]
const ul = document.createElement("ul")

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
    const li = document.createElement("li")
    li.textContent = food[i];
    ul.appendChild(li)
    
    li.addEventListener("click", function() {
        console.log("You clicked on " + food[i]);
    });

    
}
document.body.appendChild(ul);
