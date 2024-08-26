function changeTheme() {
  document.querySelector("header").classList.toggle("dark-header");
  document.querySelector("select").classList.toggle("dark-header");
  document.querySelector("option").classList.toggle("dark-header");
  document.querySelector(".search").classList.toggle("dark-header");
  document.querySelector(".search-input").classList.toggle("dark-header");

  document.querySelector("html").classList.toggle("dark-bckgnd");
  document.querySelector(".search-bar").classList.toggle("dark-bckgnd");
  document.querySelector(".btn-mode").classList.toggle("dark-button");
}
