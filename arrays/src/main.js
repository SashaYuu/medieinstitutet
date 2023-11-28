
/*
let students = ["sami", "alex", "teo", "jack", "fin", "jojo"]

stundets.push("emma") //adds a name to the array
students.pop()//delets the last string of the array 
students[1]= "moana" //changes alex name with moana
students.splice(3, 1, "layla") // deletes the name on the postion 3 and the 1 there is saying only it delete it nothing after it if we weouldve wrote 2 it will delete jack and fin cuz we said 2, layla will be changed instead of jack NOTE WE CAN WRITE JUST THE 3 AND THAT WILL BE ENOUGH FOR THE PARAMETER 
students.splice(3, 0, "layla")// add layla so it become second postion string


let num = [10,20,30,40,50,60,70,80,90]
console.log(num.includes(3)) //asking wether 3 is in the array or not
console.log(num.indexOf(20));//check the index postion of 20
console.log(num.reverse());//revers the strings


window.onload = function() {
    let start = "karrar"
    console.log(start) 
}

let names =[];

document.getElementById("sub").addEventListener("click",submit);

function submit(){
    let studentName = document.getElementById("name").value
    names.push(studentName);
    document.getElementById("h").innerHTML = names;
    console.log(names);
    

}

document.getElementById("del").addEventListener("click",del);
function del(){
    names.pop()
    document.getElementById("h").innerHTML = names;

}

*/
let animals = ["dog", "cat", "snake", "cow"]; 
for (let i = 0; i < animals.length; i++) {
 
    const li= document.createElement("li") 
    
    li.innerhtml=animals[i] 
    li.innerHTML= animals[i];
    li.appendChild(li)
};

document.body.createElement(li)