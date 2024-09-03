const currentPage = window.location.pathname;

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) => {
    if (currentPage.includes("index.html")) generateCards(json);
  });

const getCard = function (event) {
  const card = event.target.closest(".card ");
  const pname = card.querySelector(".cardInfo .name").textContent;
  localStorage.setItem("cardName", pname);
  window.location = "./card.html";
};

const displayCard = function (card) {
  //   //DOM for card page
  const img = document.querySelector("main .card img");
  const countryName = document.querySelector("main .cardInfo > h2");
  const nativeName = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(1)"
  );
  const population = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(2)"
  );
  const region = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(3)"
  );
  const subRegion = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(4)"
  );
  const capital = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(5)"
  );
  const domain = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(6)"
  );
  const currencies = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(7)"
  );
  const languages = document.querySelector(
    "main .cardInfo .flex-p p:nth-child(8)"
  );
  const border = document.querySelector("main > div > div.cardInfo > p");

  // getting card name from local storage
  const cName = localStorage.getItem("cardName");
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((json) => {
      //searching for country in json by name
      function findme(target, property) {
        const findBorders = function (object) {
          return object[property] === target;
        };
        return json.find(findBorders);
      }

      const country = json.find((country) => country.name.common === cName);

      // Seting card page elements with their value
      img.src = country.flags.svg;
      img.alt = `${country.name} flag`;
      countryName.textContent = `${country.name.common}`;
      nativeName.innerHTML = `<span>Native Name(s): </span>${Object.values(
        country.name.nativeName
      )
        .map((val) => val.common)
        .join(", ")}`;
      population.innerHTML = `<span>Population: </span>${country.population}`;
      region.innerHTML = `<span>Reigon: </span>${country.region}`;
      subRegion.innerHTML = `<span>Sub Reigon: </span>${
        country.subregion || "unknown"
      }`;
      capital.innerHTML = `<span>Capital: </span>${country.capital}`;
      domain.innerHTML = `<span>Top Level Domain: </span>${country.tld}`;
      currencies.innerHTML = `<span>Currencies: </span>${Object.values(
        country.currencies
      )
        .map((val) => val.name)
        .join(", ")}`;
      languages.innerHTML = `<span>Languages: </span>${Object.values(
        country.languages
      )
        .map((lang) => lang)
        .join(", ")} `;

      border.innerHTML = "<span>Border Countries: </span>";
      if (country.borders)
        for (const item of country.borders)
          border.innerHTML += ` <span class='border'>${
            findme(item, "cca3").name.common
          }</span>`;
      else border.innerHTML += "<span class='border'> none </span>";
    });
};

// DOM elements
const container = document.querySelector(".grid-container");

const generateCards = function (json) {
  const theme = localStorage.getItem("theme");

  for (const item of json) {
    // Creating elements
    const card = document.createElement("div");
    const cardSvg = document.createElement("img");
    const cardInfo = document.createElement("div");
    const countryName = document.createElement("p");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");

    // Appending
    container.append(card);
    card.append(cardSvg, cardInfo);
    cardInfo.append(countryName, population, region, capital);

    // Adding data
    cardSvg.src = `${item.flags.svg}`;
    cardSvg.alt = `${item.name} Flag`;
    countryName.textContent = `${item.name.common}`;
    population.innerHTML = `Population: <span> ${item.population}</span>`;
    region.innerHTML = `Region:<span> ${item.region} </span>`;
    capital.innerHTML = `Capital: <span>${item.capital}</span>`;

    // Setting classes
    card.classList.add("card");
    theme === "dark" && card.classList.add("dark-header");
    countryName.classList.add("name");
    cardInfo.classList.add("cardInfo");
    population.classList.add("property");
    region.classList.add("property", "region");
    capital.classList.add("property");

    // Adding Event listeners
    card.addEventListener("click", getCard);
  }
};

if (currentPage.includes("card.html"))
  document.addEventListener("DOMContentLoaded", displayCard);

//Search function
const countryName = document.getElementsByClassName("name");
const searchInput = document.querySelector("#search-input");
const message = document.querySelector(".not-found-message");
function handleSearch() {
  let found = false;
  const selectedRegion = document.querySelector("select").value;
  Array.from(countryName).forEach((country) => {
    if (
      country.innerText
        .toLowerCase()
        .startsWith(searchInput.value.toLowerCase()) &&
      country.parentElement.innerText.includes(selectedRegion)
    ) {
      country.parentElement.parentElement.style.display = "grid";
      found = true;
    } else {
      country.parentElement.parentElement.style.display = "none";
    }
  });
  if (!found) message.style.display = "block";
  else message.style.display = "none";
}

//filter function
const regionName = document.getElementsByClassName("region");
function handleFilter() {
  const selectedValue = document.querySelector("select").value;
  Array.from(regionName).forEach((item) => {
    if (selectedValue === "All" || item.innerText.includes(selectedValue)) {
      item.parentElement.parentElement.style.display = "grid";
    } else {
      item.parentElement.parentElement.style.display = "none";
    }
  });
}
