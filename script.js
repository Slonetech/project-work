let fruits = []; // Define a variable to hold fruits data
console.log(fruits)

document.addEventListener("DOMContentLoaded", () => {
    getFruits();
});

// Get fruits data from the local JSON server
let baseURL = "http://localhost:3000/fruits";

function getFruits() {
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            fruits= [...data];
            displayFruits(fruits);
        });
}

// Function to display fruits within the div. 
function displayFruits(fruits) {
    const filmContainer = document.querySelector("#fruits");

    fruits.forEach(fruit => {
        const card = document.createElement("div");
        card.className = "p-2 m-3 col-3 card";
        card.innerHTML = `
            <div class="card-body">
                <img src="${fruit.image}" class="card-img-top" alt="${fruits.description}">
                <h5 class="card-title">${fruit.title}</h5>
                <h6>${fruits.description}</h6>
                <ul>
                    <li>Price: ${fruits.price}</li>
                </ul>
                <form>
                    <button class="buy-button">Buy Ticket</button>
                </form>
            </div>
        `;
    });
}