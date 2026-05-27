const menuBtn =
document.getElementById("menu-btn");

const mobile-menu =
document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

  mobile-menu.classList.toggle("show");

});
const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});