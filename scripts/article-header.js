var lastScrollTop = window.pageYOffset;

function displayHeader() {
  var newY = window.pageYOffset;

  var header = document.querySelector(".article-header");

  if (newY > lastScrollTop) {
    lastScrollTop = newY;

    header.classList.add("hide-header");
    return;
  }

  header.classList.remove("hide-header");
  lastScrollTop = newY;
}

window.addEventListener('scroll', displayHeader);
