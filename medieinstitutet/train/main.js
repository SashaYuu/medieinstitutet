const myUl = document.createElement("ul");
document.body.appendChild(myUl);

function clickedSeason(e) {
  console.log("Du klickade på: ", e.target.innerHTML);
  //const handleSeason = (clickedSeason) => {};
}

const list = ["Vinter", "Vår", "Sommar", "Höst"];
for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = list[i];
  myUl.appendChild(li);
  li.addEventListener("click", clickedSeason);
}
