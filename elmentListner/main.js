window.onload = function() {
    console.log("The page has finished loading!");
}

function clickchange (){
    document.getElementById("sami").innerHTML = "hello sami"
}


document.getElementById("title").addEventListener("mouseover", function(){
    document.getElementById("title").innerHTML = "i am sad"
})
document.getElementById("title").addEventListener("mouseout", function(){
    document.getElementById("title").innerHTML = "i am happy"
})

function clickme () {
    console.log("you clicked me")
}

document.getElementById("mybutton2").addEventListener("click", eventlistner)
function eventlistner(){
    document.getElementById("mybutton2").innerHTML = "thx for clicking me"
}



let firstname = document.getElementById("fName");

document.getElementById("register").addEventListener("click", reveal);

function reveal() {
    console.log(firstname.value);
}





document.getElementById("calcualte").addEventListener("click",summa);

function summa(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value

    x = parseInt(x)
    y = parseInt(y)
    let z = x + y
    console.log(z)
}



document.getElementById("guessPressed").addEventListener("click",guessMe);

function guessMe(){
    let rightanswer = 42;
    let guesset = document.getElementById("guess").value;
    if (guesset > rightanswer) {
        console.log("choose lower")
        
    }else if (guesset < rightanswer) {
        console.log("choose higher")
        
    }if (guesset == rightanswer)
    console.log("thats the right answer")
}



document.getElementById("changeColor").addEventListener("click",colorChanger);

function colorChanger() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generates a random hexadecimal color code
    document.getElementById("body").style.backgroundColor = randomColor; // Applies the random color to the background
}


