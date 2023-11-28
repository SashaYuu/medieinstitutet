let order = new Promise ((resolve,reject)=>{
    let done;
    done = true

    if (done){
        resolve("your order is here")
    }else{
        reject("ur order didnt arrive")
    }

})
order.then((msg) => {
    console.log("nice "+ msg)
}).catch((msg) => {
    console.log("sorry "+ msg)
}) 

///////////////////////////////////////////////////
/* let eatingg = true
let NOTeating = true

function eating(){
    return new Promise((resolve,reject) =>{
        if (eatingg) {
            resolve({
                name: "he eating rn",
                mood: "happy"
            })
        
        
        }else if (NOTeating) {
            reject({
                name: "he not eating =(",
                mood:"very sad"
            })
            
        }else{
            console.log("he gone gone")
        }



    })
}

eating().then ((succes)=>{
    console.log(succes)
}).catch((msg)=> {
    console.log(msg)
}) */


////////////////////////////////////
let order1 = new Promise ((resolve,reject) => {
    resolve(console.log("order 1 arrived"))
})
let order2 = new Promise ((resolve,reject) => {
    resolve(console.log("order 2 arrived"))
})
let order3 = new Promise ((resolve,reject) => {
    resolve(console.log("order 3 arrived"))
})

Promise.all([
    order1,
    order2,
    order3
]).then((msg) =>{
    console.log(msg)
})




















/* function print(name) {
    document.getElementById("h").innerHTML = name
    console.log(this)
}

print("sami")
 */


/* const myObject = {
    name:"sami",
    myMethod: function() {
      console.log(this);
    }
  };
  
  // Call the method using dot notation
  myObject.myMethod();

 */

  // Exercise 3: Constructor Function

// Define a constructor function
