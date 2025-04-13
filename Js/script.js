const question = document.querySelector(".question");
const answerBtn = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-question");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Další Prvek";

    showQuestion()
}

function showQuestion(){
    const 
}