//Accordion

const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordion => {
    accordion.addEventListener('click', () => {
        
        accordion.classList.toggle('active');
    
        const answer = accordion.nextElementSibling;
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


//Darkmode hantering

const darkmode = document.getElementById('darkmode-toggle');

darkmode.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
});