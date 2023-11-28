/* let menu = new Promise ((resolve,reject) =>{
    resolve("your food")
    
})

let order = function (data) {
    return new Promise ((resolve,reject)=> {
        resolve(data + " is not ready")
    })
    
}

menu.then((data)=>{
    return order(data)
}).then(function(data){
    console.log(data)
}) */

/* 
fetch("http://www.omdbapi.com/?apikey=7d88fbef&s=star")

    .then((response) => response.json())
    .then((data) => {
        console.log(data.Search);


        for (let i = 0; i < data.Search.length; i++) {
        console.log(data.Search[i].Title);
        }
    });

 


fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {

    for (let i = 0; i < data.length; i++) {
      if (data[i].price < 50) {
        console.log(data[i].title, data[i].price);
      }
    }
  }); */


fetch("http://www.omdbapi.com/?apikey=7d88fbef&s=death&y=2000")

    .then((response) => response.json())
    .then((data) => {

        for (let i = 0; i < data.Search.length; i++) {
            console.log(data.Search[i].Title);
        }

        const datasContainer = document.getElementById("movies");
        
        for (let i = 0; i < data.Search.length; i++) {
          const dataContainer = document.createElement("div");
          const title = document.createElement("h3");
        
          dataContainer.className = "data";
          dataContainer.addEventListener("click", () => {
            dataClicker(data.Search[i].Title);
          });
          title.innerHTML = data.Search[i].Title;
        
          dataContainer.appendChild(title);
          datasContainer.appendChild(dataContainer);
        }
    });

const dataClicker = (dataClicked) => {
  console.log("you chose the movie:", dataClicked);
};



