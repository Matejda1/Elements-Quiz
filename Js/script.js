// Const variables for elements
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-question");
const toEnd = document.querySelector(".toEnd");
const howMuch = document.querySelector(".howMuch");
const good = document.querySelector(".good");
const fromAns = document.querySelector(".fromAns");
const endQuiz = document.querySelector(".end-quiz");
const menu = document.querySelector(".menu");
const quiz = document.querySelector(".quiz");
const title = document.querySelector(".title");
const whatBtn = document.querySelectorAll(".category-option.what");
const fromBtn = document.querySelectorAll(".category-option.from");
const startBtn = document.querySelector(".start-btn");
// const variables for input quiz
const quizI = document.querySelector(".quiz-input");
const titleI = document.querySelector(".titleI");
const nextBtnI = document.querySelector(".next-questionI");
const goodAns = document.querySelector(".goodAns");
const questionI = document.querySelector(".questionI");
const toEndI = document.querySelector(".toEndI");
const howMuchI = document.querySelector(".howMuchI");
const checkBtn = document.querySelector(".check-answer");
const userInput = document.querySelector(".user-input");
// Const viriables for alert
const alertBox = document.querySelector(".alert");
const titleA = document.querySelector(".titleA");
const textA = document.querySelector(".text");
const confirmABtn = document.querySelector(".confirmABtn");

// Let variables for all file
let currentQuestionIndex = 0;
let score = 0;
let much = 0;
let currentQuestionM = "";

// Shuffle array function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

function shuffleAnsAll() {
    console.log("Shuffled Answers per Question:");
    allElements.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAnsAllW() {
    console.log("Shuffled Answers per Question:");
    allElementsWords.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAnsA() {
    console.log("Shuffled Answers per Question:");
    group1A.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAnsAW() {
    console.log("Shuffled Answers per Question:");
    group1AWords.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAns2A() {
    console.log("Shuffled Answers per Question:");
    group2A.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAns8A() {
    console.log("Shuffled Answers per Question:");
    group8A.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAns2AW() {
    console.log("Shuffled Answers per Question:");
    group2AWords.forEach((q, index) => {
        shuffle(q.answers);
    });
}

function shuffleAns8AW() {
    console.log("Shuffled Answers per Question:");
    group8AWords.forEach((q, index) => {
        shuffle(q.answers);
    });
}

// Start quiz function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Další Prvek →";

    menu.style.display = "none";

    shuffle(allElements);
    shuffleAnsAll();
    shuffleAnsAll();
    shuffle(allElementsWords);
    shuffleAnsAllW();
    shuffleAnsAllW();
    shuffle(group1A);
    shuffleAnsA();
    shuffleAnsA();
    shuffle(group1AWords);
    shuffleAnsAW();
    shuffleAnsAW();
    shuffle(group2A);
    shuffleAns2A();
    shuffleAns2A();
    shuffle(group8A);
    shuffleAns8A();
    shuffleAns8A();
    shuffle(group2AWords);
    shuffleAns2AW();
    shuffleAns2AW();
    shuffle(group8AWords);
    shuffleAns8AW();
    shuffleAns8AW();
    shuffle(allElementsInputs);
    shuffle(allElementsWordsInputs);
    shuffle(group1AInputs);
    shuffle(group1AWordsInputs);
    shuffle(group2AInputs);
    shuffle(group8AInputs);
    shuffle(group2AWordsInputs);
    shuffle(group8AWordsInputs);

    const from = document.querySelector(".from.active").value.toLowerCase();



    if (from == "from" || from == "to") {
        quiz.style.display = "block";
        quizI.style.display = "none";
        showQuestion();
    } else if (from == "fromm" || from == "tom") {
        quiz.style.display = "none";
        quizI.style.display = "block";
        showQuestionM();
    } else {
        console.log("error don't work")
        showAlert("Upozornění", "Něco je špatně, zkuste to znovu. Pokud to ani tak nefunguje, konatujte vyvojáře.", "Okay");
    }
}

// Show question function
function showQuestion() {
    resetState();

    const what = document.querySelector(".what.active").value.toLowerCase();
    const from = document.querySelector(".from.active").value.toLowerCase();

    let currentQuestion;

    // from what database get the questions
    if (what == "all" && from == "to") {
        currentQuestion = allElements[currentQuestionIndex];
        much = allElements.length;
        title.innerHTML = "Všechny prvky - Z názvů na značky";
    } else if (what == "all" && from == "from") {
        currentQuestion = allElementsWords[currentQuestionIndex];
        much = allElementsWords.length;
        title.innerHTML = "Všechny prvky - Ze značek na název";
    } else if (what == "a" && from == "to") {
        currentQuestion = group1A[currentQuestionIndex];
        much = group1A.length;
        title.innerHTML = "1.A skupina - Z názvů na značky"
    } else if (what == "a" && from == "from") {
        currentQuestion = group1AWords[currentQuestionIndex];
        much = group1AWords.length;
        title.innerHTML = "1.A skupina - Ze značek na název"
    } else if (what == "2a" && from == "to") {
        currentQuestion = group2A[currentQuestionIndex];
        much = group2A.length;
        title.innerHTML = "2.A skupina - Z názvů na značky"
    } else if (what == "2a" && from == "from") {
        currentQuestion = group2AWords[currentQuestionIndex];
        much = group2AWords.length;
        title.innerHTML = "2.A skupina - Ze značek na název"
    } else if (what == "8a" && from == "to") {
        currentQuestion = group8A[currentQuestionIndex];
        much = group8A.length;
        title.innerHTML = "8.A skupina - Z názvů na značky"
    } else if (what == "8a" && from == "from") {
        currentQuestion = group8AWords[currentQuestionIndex];
        much = group8AWords.length;
        title.innerHTML = "8.A skupina - Ze značek na název"
    } else {
        console.log("error don't work")
        showAlert("Upozornění", "Něco je špatně, zkuste to znovu. Pokud to ani tak nefunguje, konatujte vyvojáře.", "Okay");
    }

    let questionNumber = currentQuestionIndex + 1;
    question.innerHTML = currentQuestion.question;
    toEnd.innerHTML = questionNumber;
    howMuch.innerHTML = much + ".";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestionIndex === much - 1) {
        nextBtn.innerHTML = " Zobrazit výsledek";
    } else {
        nextBtn.innerHTML = "Další Prvek →";
    }
}

function resetState() {
    nextBtn.style.display = "none";
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answers.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showResult() {
    resetState();
    question.innerHTML = "";
    good.innerHTML = score;
    fromAns.innerHTML = much;
    endQuiz.style.display = "block";
    quiz.style.display = "none";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < much) {
        showQuestion();
    } else {
        showResult();
    }
}

nextBtn.addEventListener("click", handleNextButton);

function toMenu() {
    endQuiz.style.display = "none";
    menu.style.display = "block";
}

// Only one with class active
whatBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        whatBtn.forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");
    });
});

fromBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        fromBtn.forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");
    });
});

startBtn.addEventListener("click", () => {
    const whatActive = document.querySelector(".what.active");
    const fromActive = document.querySelector(".from.active");

    if (whatActive && fromActive) {
        startQuiz();
    } else {
        showAlert("Upozornění", "Pokud chcete začít, musíte vybrat jaké a jak se chcete vzorečky naučit.", "Okay");
    }
});

// Input for quiz

function resetStateI() {
    nextBtnI.style.display = "none";
    goodAns.style.display = "none";
    goodAns.innerHTML = "";
    userInput.value = "";
    userInput.classList.remove("correctI", "incorrectI");
    currentQuestionM = "";
    checkBtn.style.display = "block";
    userInput.disabled = false;
}

function showQuestionM() {
    resetStateI();

    const what = document.querySelector(".what.active").value.toLowerCase();
    const from = document.querySelector(".from.active").value.toLowerCase();

    let currentQuestion;

    // from what database get the questions
    if (what == "all" && from == "fromm") {
        currentQuestion = allElementsInputs[currentQuestionIndex]
        much = allElementsInputs.length;
        titleI.innerHTML = "Všechny prvky - Ze značek na název"
    } else if (what == "all" && from == "tom") {
        currentQuestion = allElementsWordsInputs[currentQuestionIndex]
        much = allElementsWordsInputs.length;
        titleI.innerHTML = "Všechny prvky - Z názvů na značky"
    } else if (what == "a" && from == "fromm") {
        currentQuestion = group1AInputs[currentQuestionIndex]
        much = group1AInputs.length;
        titleI.innerHTML = "1.A skupina - Ze značek na název"
    } else if (what == "a" && from == "tom") {
        currentQuestion = group1AWordsInputs[currentQuestionIndex]
        much = group1AWordsInputs.length;
        titleI.innerHTML = "1.A skupina - Z názvů na značky"
    } else if (what == "2a" && from == "fromm") {
        currentQuestion = group2AInputs[currentQuestionIndex]
        much = group2AInputs.length;
        titleI.innerHTML = "2.A skupina - Ze značek na název"
    } else if (what == "2a" && from == "tom") {
        currentQuestion = group2AWordsInputs[currentQuestionIndex]
        much = group2AWordsInputs.length;
        titleI.innerHTML = "2.A skupina - Z názvů na značky"
    } else if (what == "8a" && from == "fromm") {
        currentQuestion = group8AInputs[currentQuestionIndex]
        much = group8AInputs.length;
        titleI.innerHTML = "8.A skupina - Ze značek na název"
    } else if (what == "8a" && from == "tom") {
        currentQuestion = group8AWordsInputs[currentQuestionIndex]
        much = group8AWordsInputs.length;
        titleI.innerHTML = "8.A skupina - Z názvů na značky"
    } else {
        console.log("error don't work")
        showAlert("Upozornění", "Něco je špatně, zkuste to znovu. Pokud to ani tak nefunguje, konatujte vyvojáře.", "Okay");
    }

    currentQuestionM = currentQuestion;
    let questionNumber = currentQuestionIndex + 1;
    questionI.innerHTML = currentQuestion.question;
    toEndI.innerHTML = questionNumber;
    howMuchI.innerHTML = much + ".";

    goodAns.innerHTML = currentQuestion.answer;

    if (currentQuestionIndex === much - 1) {
        nextBtnI.innerHTML = "Zobrazit výsledek";
    } else {
        nextBtnI.innerHTML = "Další Prvek →";
    }
}

function checkAns() {
    let userAns = userInput.value.toLowerCase().trim();
    let correctAns = currentQuestionM.answer.toLowerCase().trim();
    let correctAnsP = currentQuestionM.answer;

    if (userAns === correctAns) {
        goodAns.style.display = "block";
        goodAns.innerHTML = "Správně!";
        userInput.classList.add("correctI");
        score++;

    } else {
        goodAns.style.display = "block";
        goodAns.innerHTML = "Špatně! Správná odpověd je: " + correctAnsP;
        userInput.classList.add("incorrectI");
    }
}

function nextQuestionI() {
    currentQuestionIndex++;
    if (currentQuestionIndex < much) {
        showQuestionM();
    } else {
        showResultI();
    }
}

function showResultI() {
    resetStateI();
    good.innerHTML = score;
    fromAns.innerHTML = much;
    endQuiz.style.display = "block";
    quizI.style.display = "none";
}

checkBtn.addEventListener("click", () => {
    if (userInput.value !== "") {
        checkAns();
        checkBtn.style.display = "none";
        nextBtnI.style.display = "block";
        userInput.disabled = true;
    } else {
        showAlert("Upozornění", "Musíte napsat odpověď.", "Oka");
    }
});

nextBtnI.addEventListener("click", nextQuestionI);

// Alerts Function
function showAlert(title, text, btnText) {
    titleA.innerHTML = title
    textA.innerHTML = text;
    confirmABtn.innerHTML = btnText;

    alertBox.style.display = "flex";
}

confirmABtn.addEventListener("click", () => {
    alertBox.style.display = "none";
    titleA.innerHTML = "";
    textA.innerHTML = "";
    confirmABtn.innerHTML = "";
});