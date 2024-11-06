
const menuButton = document.querySelector(".nav-mobile-button");
const menu = document.querySelector(".nav-content");

menuButton.addEventListener('click', () => {
    console.log("Кликнули по меню");
    menu.classList.toggle('is-open')
})