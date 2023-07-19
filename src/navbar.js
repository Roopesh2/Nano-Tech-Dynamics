const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
navMenu.addEventListener("click", toggleHamburger);