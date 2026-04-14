// animations
function fadeIn(el) {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";

  setTimeout(() => {
    el.style.transition = "0.5s";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 50);
}

function pulse(el) {
  el.classList.add("pulse");
}