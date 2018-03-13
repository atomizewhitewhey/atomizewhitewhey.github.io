var lastScrollTop = window.pageYOffset;
var header = document.querySelector(".article-header");
var navbar = document.querySelector("#article-nav");

function displayHeader() {
  var newY = window.pageYOffset;

  if (newY > lastScrollTop) {
    lastScrollTop = newY;

    header.classList.add("hide-header");
    navbar.classList.remove("shift-down-for-header");
    return;
  }

  header.classList.remove("hide-header");
  navbar.classList.add("shift-down-for-header");
  lastScrollTop = newY;
}

window.addEventListener('scroll', displayHeader);
