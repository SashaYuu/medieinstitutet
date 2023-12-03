/* fetch("./data/pizza.json")
    .then((response) => response.json())
    .then((data) => {
        data.pizzas.forEach(lo => {
            const markup = `<li>${lo.name}</li>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch((error) => console.error('Error fetching pizza data:', error));


 */
    let container = document.querySelector(".pizza");

    fetch("./data/pizza.json")
        .then((response) => response.json())
        .then((data) => {
            const row = document.querySelector('#pizza article.row');
    
            for (let i = 0; i < data.pizzas.length; i++) {
                const pizza = data.pizzas[i];
    
                // Create elements
                const article = document.createElement('article');
                article.classList.add('col', 'pizza');
    
                const image = document.createElement('img');
                image.className = "img";
                image.src = pizza.picture_url;
                image.alt = 'pizza';
                image.classList.add('img-fluid');
    
                const h4 = document.createElement('h4');
                h4.textContent = pizza.name;
    
                const p = document.createElement('p');
                p.textContent = pizza.description;
    
                const price = document.createElement('h3');
                price.textContent = pizza.price;
    
                // Append elements to the row
                row.appendChild(article);
                article.appendChild(image);
                article.appendChild(h4);
                article.appendChild(p);
                article.appendChild(price);
    
                // Add click event listener
                article.addEventListener('click', () => handleFoodClick(pizza.name));
            }
        })
        .catch((error) => console.error('Error fetching pizza data:', error));
    
    const handleFoodClick = (clickedFood) => {
        console.log("You selected a pizza:", clickedFood);
    };
    