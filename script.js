const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .navigasi ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
