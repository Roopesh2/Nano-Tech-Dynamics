const hamburgerBtn = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const openIcon = document.getElementById("open");
const navMenu = document.querySelector(".menu");

function toggleHamburger() {
  navMenu.classList.toggle("show");
  closeIcon.classList.toggle("show");
  openIcon.classList.toggle("show");
}

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
navMenu.addEventListener("click", toggleHamburger);