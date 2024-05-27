'use strict'
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close")
const modal = document.querySelector(".modal")
const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
}
btnOpen.addEventListener("click", modalViewHandler);
btnClose.addEventListener('click', modalViewHandler); 