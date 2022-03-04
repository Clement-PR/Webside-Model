const nav = document.querySelector("nav");

window.addEventListener('scroll', (e) => {
  if (scrollY > 0) {
    nav.classList.add("nav-animation");
    nav.style.background = "#000";
  } else {
    nav.style.background = "none";
  }
});


