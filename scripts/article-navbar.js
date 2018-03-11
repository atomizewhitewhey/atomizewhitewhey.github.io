function getGlobalOffsetTop(element) {
  var offset = 0;
  while (element) {
    offset += element.offsetTop;
    element = element.offsetParent;
  }
  return offset;
}

function switchActiveState(scrollTop) {
  var setActive = false;

  var anchors = document.querySelectorAll("#article-nav a");
  anchors.forEach(function(anchor) {
    var section = document.querySelector(anchor.getAttribute("href"));

    var offset = getGlobalOffsetTop(section);

    if (offset - 100 <= document.body.scrollTop
      && offset - 100 + section.clientHeight >= document.body.scrollTop) {
      anchor.classList.add("active");
      setActive = true;
      return;
    }

    anchor.classList.remove("active");
  });
}

window.addEventListener('scroll', switchActiveState);
