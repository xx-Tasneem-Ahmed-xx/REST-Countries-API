function changeTheme() {
  document.querySelector("header").classList.toggle("dark-header");
  document.querySelectorAll(".card").forEach((item) => {
    item.classList.toggle("dark-header");
  });
  document.querySelector("body").classList.toggle("dark-bckgnd");

  document.querySelector("select").classList.toggle("dark-header");
  // document.querySelector("option").classList.toggle("dark-header");
  document.querySelector(".search").classList.toggle("dark-header");
  document.querySelector(".search-input").classList.toggle("dark-header");
  document.querySelector(".btn-mode").classList.toggle("dark-button");
}
