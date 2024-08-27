const currentPage = window.location.pathname;

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    if (currentPage.includes("index.html")) generateCards(json);
  });

const getCard = function (event) {
  const card = event.target.closest(".card ");
  const pname = card.querySelector(".cardInfo .name").textContent;
  localStorage.setItem("cardName", pname);
  window.open("card.html", "_blank");
};

const displayCard = function (card) {
  //   //DOM for card page
  const img = document.querySelector("main .card img");
  const name = document.querySelector("main .cardInfo > h2");
  const nativeName = document.querySelector("main .cardInfo  p:nth-child(2)");
  const population = document.querySelector("main .cardInfo p:nth-child(3)");
  const region = document.querySelector("main .cardInfo p:nth-child(4)");
  const subRegion = document.querySelector("main .cardInfo p:nth-child(5)");
  const capital = document.querySelector("main .cardInfo p:nth-child(6)");
  const domain = document.querySelector("main .cardInfo p:nth-child(7)");
  const currencies = document.querySelector("main .cardInfo p:nth-child(8)");
  const languages = document.querySelector("main .cardInfo p:nth-child(9)");

  // getting card name from local storage
  const cName = localStorage.getItem("cardName");
  console.log(cName);
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      //searching for country in json by name
      const findCountry = function (objects) {
        return objects.name === cName;
      };

      const country = json.find(findCountry);
      console.log(country);

      // Seting card page elements with their value
      img.src = country.flags.svg;
      img.alt = `${country.name} flag`;
      name.textContent = `${country.name}`;
      nativeName.innerHTML = `<span>Native Name: </span>${country.nativeName}`;
      population.innerHTML = `<span>Population: </span>${country.population}`;
      region.innerHTML = `<span>Reigon: </span>${country.region}`;
      subRegion.innerHTML = `<span>Sub Reigon: </span>${country.subregion}`;
      capital.innerHTML = `<span>Capital: </span>${country.capital}`;
      domain.innerHTML = `<span>Top Level Domain: </span>${country.topLevelDomain}`;
      currencies.innerHTML = `<span>Currencies: </span>${country.currencies[0].name}`;
      languages.innerHTML = "<span>Languages: </span>";
      for (const obj of country.languages)
        languages.textContent += `${obj.nativeName} `;
    });
};

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

    // Adding Event listeners
    card.addEventListener("click", getCard);
  }
};

if (currentPage.includes("card.html"))
  document.addEventListener("DOMContentLoaded", displayCard);
