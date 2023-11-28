let students = [

    {
        fN: "Alex",
        lN: "Aj",
        age: "90",
        year: "2095",

        fullName: function(){
            console.log(this.fN +" "+ this.lN);
        }
    },
    {
        fN: "Miko",
        lN: "Nana",
        age: "17",
        year: "2030",

        fullName: function(){
            console.log(this.fN +" "+ this.lN);
        }
    },
    {
        fN: "Roby",
        lN: "Bauo",
        age: "16",
        year: "2021",

        fullName: function(){
            console.log(this.fN +" "+ this.lN);
        }
    }
]




const tr = document.createElement("tr")
const tr2 = document.createElement("tr")


//NAME
for (let i = 0; i < students.length; i++) {
    const th = document.createElement("th")
    th.textContent = students[i].fN;
    tr.appendChild(th)


    
}


//AGE
for (let i = 0; i < students.length; i++) {
    const td = document.createElement("td")
    td.textContent = students[i].age;
    tr2.appendChild(td)


    
}

document.body.appendChild(tr);
document.body.appendChild(tr2);




