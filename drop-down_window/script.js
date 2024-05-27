const menu = document.querySelector('.main-nav');
const burgerBtn = document.querySelector('.burger');
const brow = document.querySelector('.global-icon');
const burgerHeader = document.querySelector('.burger-header');
const burgerLines = document.querySelector(".burger__line");
burgerBtn.addEventListener('click', openMenu);
function openMenu(){
    burgerHeader.classList.toggle('menu--open');
}