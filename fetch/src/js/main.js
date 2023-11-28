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


fetch("http://www.omdbapi.com/?apikey=416ed51a&s=star")

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
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].price < 50) {
        console.log(data[i].title, data[i].price);
      }
    }
  });



