'use strict'
const tooltips = document.querySelectorAll("tooltip");
console.log(tooltips);

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', onTooltipClick);
});
function onTooltipClick (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated');
}