const name = localStorage.getItem("studentName");
const course = localStorage.getItem("studentCourse");

document.getElementById("studentName").textContent = name;
document.getElementById("studentCourse").textContent = course;

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";

        button.onclick = function(){

            selectedAnswer = option;

        };

        optionsDiv.appendChild(button);

    });

}

loadQuestion();

document.getElementById("nextBtn").onclick = function(){

    if(selectedAnswer === null){

        alert("Please select an answer.");

        return;

    }

    if(selectedAnswer === questions[currentQuestion].answer){

        score++;

    }

    selectedAnswer = null;

    currentQuestion++;

    currentQuestion++;

if(currentQuestion < questions.length){

    if(currentQuestion === questions.length - 1){
        document.getElementById("nextBtn").textContent = "Finish Quiz";
    }

    loadQuestion();
const palette = document.getElementById("palette");
palette.innerHTML = "";

for (let i = 0; i < questions.length; i++) {
    const btn = document.createElement("button");

    btn.textContent = i + 1;

    if (i === currentQuestion) {
        btn.style.background = "#0d6efd";
        btn.style.color = "white";
    }

    btn.onclick = function () {
        currentQuestion = i;
        selectedAnswer = null;
        loadQuestion();
    };

    palette.appendChild(btn);
}
}else{

    localStorage.setItem("score", score);

    window.location.href = "result.html";

}
