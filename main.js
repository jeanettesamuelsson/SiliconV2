
//Accordion

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {

        accordions.forEach(otherAcc => {

        if (otherAcc !==accordion) {
            otherAcc.classList.remove("active");
            otherAcc.nextElementSibling.style.display ="none";
        }
      });

         accordion.classList.toggle("active");

        const answer = accordion.nextElementSibling;

        if (answer.style.display ==="block") {
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