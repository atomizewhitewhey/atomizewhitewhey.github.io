var lastScrollTop = window.pageYOffset;

function displayHeader() {
  var newY = window.pageYOffset;

  var header = document.querySelector(".article-header");

  if (newY > lastScrollTop) {
    lastScrollTop = newY;

    header.classList.add("hide-header");
    document.querySelector(".article-container").classList.remove("shift-down-for-header");
    return;
  }

  header.classList.remove("hide-header");
  document.querySelector(".article-container").classList.add("shift-down-for-header");

  lastScrollTop = newY;
}

window.addEventListener('scroll', displayHeader);
