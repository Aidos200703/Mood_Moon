// const btnMenu = document.querySelector(".btn_menu");
// const menuMobile = document.querySelector(".menu_on_mobile");
// const menuOverlay = document.querySelector(".menu_overlay");
// const logoText = document.querySelector(".logo_text");

// btnMenu.addEventListener("click", () => {
//   menuMobile.classList.toggle("active");
//   logoText.classList.toggle("active");
// });

// menuOverlay.addEventListener("click", () => {
//   menuMobile.classList.remove("active");
// });

const btnMenu = document.querySelector(".btn_menu");
const menuMobile = document.querySelector(".menu_on_mobile");
const menuOverlay = document.querySelector(".menu_overlay");

const headerTop = document.querySelector(".header_top");
const logoText = document.querySelector(".logo_text");
const specialWord = document.querySelector(".special_word");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  document.body.classList.toggle("menu_open");
  headerTop.classList.toggle("active");
  logoText.classList.toggle("active");
  specialWord.classList.toggle("active");
  btnMenu.classList.toggle("active");
  document.documentElement.classList.toggle("menu_open");
});

menuOverlay.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.classList.remove("menu_open");
  headerTop.classList.remove("active");
  logoText.classList.remove("active");
  specialWord.classList.remove("active");
  btnMenu.classList.remove("active");
  document.documentElement.classList.remove("menu_open");
});
