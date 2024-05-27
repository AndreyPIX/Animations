const tabLinks = document.querySelectorAll(".tablinks"); 
const tabContents = document.querySelectorAll(".tabcontent"); 
tabLinks.forEach(tabLink => { 
    tabLink.addEventListener("click", openTabs); 
}); 
function openTabs(evt) { 
    const btnTarget = evt.currentTarget; 
    const day = btnTarget.dataset.day; 
 
    tabContents.forEach(tabContent => { 
        tabContent.classList.remove('tabcontent-active'); 
    }); 
 
    tabLinks.forEach(tabLink => { 
        tabLink.classList.remove('tablinks-active'); 
    }); 
    document.querySelector(`#${day}`).classList.add("tabcontent-active"); 
    btnTarget.classList.add("tablinks-active"); 
}
