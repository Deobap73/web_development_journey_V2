document.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
