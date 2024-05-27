'use strict' 

const accordeonQuestions = document.querySelectorAll(".accordeon__qustion"); 
 
accordeonQuestions.forEach(accordeonQuestion => { 
    accordeonQuestion.addEventListener("click", function (evt) { 
        const clickedQuestion = evt.currentTarget; 
        const clickedAnswer = clickedQuestion.nextElementSibling; 
         
        clickedQuestion.classList.toggle("accordeon__qustion--active"); 
        clickedAnswer.classList.toggle("accordeon__answer--visible"); 
 
        if (clickedAnswer.classList.contains("accordeon__answer--visible")) { 
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px"; 
        } else { 
            clickedAnswer.style.maxHeight = null; 
        } 
    }); 
});