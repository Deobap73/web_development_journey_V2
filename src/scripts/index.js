"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

function toggleSearch() {
  let searchContainer = document.querySelector(".menuNavigation .search");
  searchContainer.classList.toggle("active");
  document.getElementById("searchInput").focus();
}

function submitSearch(event) {
  event.preventDefault();
  let searchQuery = document.getElementById("searchInput").value;

  alert("Pesquisando por: " + searchQuery);
}



window.onload = function() {
  let paragraphs = document.getElementsByClassName("mainSectionBlogContainerArticlesOldAArticleBlogArticle");

  for (let i = 0; i < paragraphs.length; i++) {
    let paragraph = paragraphs[i];
    let words = paragraph.textContent.trim().split(" ");
    let shortenedText = words.slice(0, 50).join(" ") + "...";
    paragraph.textContent = shortenedText;

    paragraph.addEventListener("click", function() {
      window.location.href = "blog.html";
    });
  }
};
