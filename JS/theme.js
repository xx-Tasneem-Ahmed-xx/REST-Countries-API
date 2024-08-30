function applyTheme() {
  if (localStorage.getItem("theme") == "dark") darkTheme();
  else lightTheme();
}

function applyInfoTheme() {
  if (localStorage.getItem("theme") == "dark") darkInfo();
  else lightInfo();
}

function changeTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
    lightTheme();
  } else {
    localStorage.setItem("theme", "dark");
    darkTheme();
  }
}

function infoTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
    lightInfo();
  } else {
    localStorage.setItem("theme", "dark");
    darkInfo();
  }
}

function darkTheme() {
  document.querySelector("header").classList.add("dark-header");
  document.querySelectorAll(".card").forEach((item) => {
    item.classList.add("dark-header");
  });
  document.querySelector("body").classList.add("dark-bckgnd");
  document.querySelector("select").classList.add("dark-header");
  document.querySelector(".search").classList.add("dark-header");
  document.querySelector(".search-input").classList.add("dark-header");
  document.querySelector(".btn-mode").classList.add("dark-button");
}
function lightTheme() {
  document.querySelector("header").classList.remove("dark-header");
  document.querySelectorAll(".card").forEach((item) => {
    item.classList.remove("dark-header");
  });
  document.querySelector("body").classList.remove("dark-bckgnd");
  document.querySelector("select").classList.remove("dark-header");
  document.querySelector(".search").classList.remove("dark-header");
  document.querySelector(".search-input").classList.remove("dark-header");
  document.querySelector(".btn-mode").classList.remove("dark-button");
}
function darkInfo() {
  document.querySelector("header").classList.add("dark-header");
  document.querySelector("body").classList.add("dark-bckgnd");
  document.querySelector(".btn-mode").classList.add("dark-button");
  document.querySelector(".back-btn").classList.add("dark-button");
  document.querySelectorAll(".cardInfo span.border").forEach((item) => {
    item.classList.add("dark-header");
  });
}
function lightInfo() {
  document.querySelector("header").classList.remove("dark-header");
  document.querySelector("body").classList.remove("dark-bckgnd");
  document.querySelector(".btn-mode").classList.remove("dark-button");
  document.querySelector(".back-btn").classList.remove("dark-button");
  document.querySelectorAll(".cardInfo span.border").forEach((item) => {
    item.classList.remove("dark-header");
  });
}
