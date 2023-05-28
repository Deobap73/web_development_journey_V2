document.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

function toggleSearch() {
  let searchContainer = document.querySelector(".menuNavegation .search");
  searchContainer.classList.toggle("active");
  document.getElementById("searchInput").focus();
}

function submitSearch(event) {
  event.preventDefault();
  let searchQuery = document.getElementById("searchInput").value;
  // Lógica de pesquisa aqui - substitua com a lógica real do seu site
  alert("Pesquisando por: " + searchQuery);
}