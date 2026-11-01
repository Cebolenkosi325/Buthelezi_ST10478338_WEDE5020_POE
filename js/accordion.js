// accordion.js
// Opens and closes the answers in the FAQ list

const questions = document.querySelectorAll(".accordion-button");
const answers = document.querySelectorAll(".accordion-panel");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        // remember if this answer was already open
        const wasOpen = !answers[i].hidden;

        // close all the answers
        for (let j = 0; j < answers.length; j++) {
            answers[j].hidden = true;
            questions[j].classList.remove("open");
            questions[j].setAttribute("aria-expanded", "false");
        }

        // open this answer, unless it was open (then it stays closed)
        if (!wasOpen) {
            answers[i].hidden = false;
            questions[i].classList.add("open");
            questions[i].setAttribute("aria-expanded", "true");
        }
    });
}