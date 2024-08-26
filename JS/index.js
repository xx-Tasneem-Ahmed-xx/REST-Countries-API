// requiring json data
// const data = require("../data.json");

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => generateCards(json));

// DOM elements
const container = document.querySelector(".grid-container");

const generateCards = function (json) {
  for (const item of json) {
    // Creating elements
    const card = document.createElement("div");
    const cardSvg = document.createElement("img");
    const cardInfo = document.createElement("div");
    const name = document.createElement("p");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");

    // Appending
    container.append(card);
    card.append(cardSvg, cardInfo);
    cardInfo.append(name, population, region, capital);

    // Adding data
    cardSvg.src = `${item.flags.svg}`;
    cardSvg.alt = `${item.name} Flag`;
    name.textContent = `${item.name}`;
    population.innerHTML = `Population: <span> ${item.population}</span>`;
    region.innerHTML = `Region:<span> ${item.region} </span>`;
    capital.innerHTML = `Capital: <span>${item.capital}</span>`;

    // Setting classes
    card.classList.add("card");
    name.classList.add("name");
    cardInfo.classList.add("cardInfo");
    population.classList.add("property");
    region.classList.add("property");
    capital.classList.add("property");
  }
};
// generateCards();
