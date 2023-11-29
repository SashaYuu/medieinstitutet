let jokes = JSON.parse(window.localStorage.getItem("jokes")) || [];

document.querySelector(".button-1").addEventListener("click", createJoke);

function createJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(responseData => {
      let data = responseData.value;

      // Display the new joke by updating the existing DOM element
      let jokesContainer = document.querySelector(".jokes");
      if (jokesContainer.childElementCount > 0) {
        // If there's an existing joke, update its text content
        jokesContainer.firstChild.textContent = data;
        // Update the joke in the array
        jokes[0] = data;
      } else {
        // If no existing joke, create a new element
        let div = document.createElement("div");
        div.appendChild(document.createTextNode(data));
        jokesContainer.appendChild(div);
        // Add the new joke to the array
        jokes.push(data);
      }

      // Update local storage with the updated array of jokes
      window.localStorage.setItem("jokes", JSON.stringify(jokes));
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
}

// Display initial jokes from local storage (if any)
jokes.forEach(joke => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(joke));
  document.querySelector(".jokes").appendChild(div);
});