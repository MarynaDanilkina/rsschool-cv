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

let themaFirst = "false";


function setLocalStorage() {

    localStorage.setItem("thema", themaFirst);

}
window.addEventListener("beforeunload", setLocalStorage)

function getLocalStorage() {

    if (localStorage.getItem("thema") === "true") {
        changeSubject();
    }

}
window.addEventListener('load', getLocalStorage)

const moon = document.querySelector('.header__moon')
const sun = document.querySelector('.header__sun')
const icon = document.querySelector('.header__icon')

moon.addEventListener("click", changeSubject);
icon.addEventListener("click", changeSubject);


function changeSubject() {

    themaFirst = (icon.classList.contains("header__moon")).toString();
    icon.classList.toggle('header__moon')
    icon.classList.toggle('header__sun')
    if (icon.classList.contains('header__sun')) {

        document.querySelectorAll('.icon__right').forEach((el) => {
            el.style.fill = "#FFF";
        });
        document.querySelector('.header').style.backgroundColor = "#1B0802";
        document.querySelector('.name').style.backgroundColor = "rgb(68 57 53)";
        document.querySelector('.name').style.color = "#fff";
        document.querySelector('.block__rigth').style.backgroundColor = "rgb(112 91 85)";
        document.querySelector('body').style.color = "#fff";
        document.querySelectorAll('.cv__h2-black').forEach((el) => {
            el.style.color = "#fff";
        });
        document.querySelectorAll('.portfolio__item a').forEach((el) => {
            el.style.color = "#fff";
        });
        document.querySelector('pre code.hljs').style.backgroundColor = "#1B0802";
        document.querySelector('.menu').style.backgroundColor = "#1B0802";




    } else if (icon.classList.contains('header__moon')) {

        document.querySelectorAll('.icon__right').forEach((el) => {
            el.style.fill = "#000";
        });
        document.querySelector('.header').style.backgroundColor = "#B66A54";
        document.querySelector('.name').style.backgroundColor = "#B6877A";
        document.querySelector('.name').style.color = "#000";
        document.querySelector('.block__rigth').style.backgroundColor = "#fff";
        document.querySelector('body').style.color = "#000";
        document.querySelectorAll('.cv__h2-black').forEach((el) => {
            el.style.color = "#000";
        });
        document.querySelectorAll('.portfolio__item a').forEach((el) => {
            el.style.color = "#000";
        });
        document.querySelector('pre code.hljs').style.backgroundColor = "#fff";
        document.querySelector('.menu').style.backgroundColor = "#B66A54";

    }
}