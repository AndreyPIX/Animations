'use strict'
const btnOpen = document.getElementById("btn--open");
const modal = document.getElementById("modal")

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
}

btnOpen.addEventListener("click", modalViewHandler);
modal.addEventListener("click", modalViewHandler);