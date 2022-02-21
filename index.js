//бургер меню
const iconMenu = document.querySelector('.header__menu-icon');
const iconMenuAc = document.querySelector('._active');
//общий класс для навигации
const menuHeader = document.querySelector('.menu');

if (iconMenu) {
    //при клике на бургер меню
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
}

const navMenu = document.querySelectorAll('.menu__link');
navMenu.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {

    iconMenu.classList.remove('_active');
    menuHeader.classList.remove('_active');

}