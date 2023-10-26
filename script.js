
let fruits = []; // Define a variable to hold fruits data
// console.log(fruits)

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
function displayFruits(fruits){
    const fruitContainer = document.querySelector("#items");
    for(let fruit of fruits){
        fruitContainer.innerHTML += `
        <div class="ml-1 my-2 col-4">
            <div class="card" id= "card">
                <img src="${fruit.image}" height="250px" class="card-img-top image" alt="...">
                <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <p>Sh. ${fruit.price}</p>
                </div>
            </div>
        </div>
        `
        const btnAddCart= document.createElement("button")
        const card= document.getElementById("card")
        btnAddCart.className="btn btn-primary btn-sm btn-block m-4 w-100"
        card.appendChild(btnAddCart)        
    }
}