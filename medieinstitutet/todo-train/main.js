let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let taskArt = document.querySelector(".tasks")

arrayOfTasks = []

if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}



getItem()

submit.onclick = function () {
    if (input.value !== "") {
        addArray(input.value)

    }
}

function addArray(arrayText){
    let task = {
        id : Date.now(),
        title : arrayText,
        completed : false,
    }

    arrayOfTasks.push(task)
    html(arrayOfTasks)
    addToLocal(arrayOfTasks)







}

function html(arrayOfTasks){
    console.log("sami")

    taskArt.innerHTML = ""
    arrayOfTasks.forEach((task) => {
    
    let div = document.createElement("div")
    div.className = "task"

    if (task.completed) {
        div.className = "task done";
        }
    div.setAttribute("data-id", task.id)
    div.appendChild(document.createTextNode(task.title))
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("delete"));
    div.appendChild(span);
    console.log(div)
    taskArt.appendChild(div)

    })
    


}



/* function addToLocal(arrayOfTasks){
    window.localStorage.setItem("tasks", JSON.stringify( arrayOfTasks))
}

<<<<<<< HEAD
function getItem(arrayOfTasks) {
    let data = window.localStorage.getItem("tasks")
    let tasks = JSON.parse(data)
    html(tasks)

}   

fetch("url")
.then((Response) => Response.json())
.then((products) => {
    console.log("producter:", products);
    createHtml(products)
})

function createHtml (movies) {
    movies.forEach((movie) => {
        console.log(movie)
    });
} */
=======
>>>>>>> 33a1061605899c38a07537ec932d9cc6991846d3
