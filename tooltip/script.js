'use strict'
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach((tooltip) => {
   tooltip.addEventListener('mouseover', onTooltipClick);
});
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseleave', onTooltipClick);
 });
function onTooltipClick (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated');
};