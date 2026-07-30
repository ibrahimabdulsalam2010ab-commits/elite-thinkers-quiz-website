const name = localStorage.getItem("studentName");
const course = localStorage.getItem("studentCourse");

document.getElementById("studentName").textContent = name;
document.getElementById("studentCourse").textContent = course;

let minutes = 20;
let seconds = 0;

const timer = setInterval(() => {

    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Time is up!");
            window.location.href = "result.html";
            return;
        }

        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    document.getElementById("timer").textContent =
        `Time Left: ${minutes}:${seconds.toString().padStart(2,"0")}`;

},1000);

document.getElementById("nextBtn").onclick = function(){
    alert("Next question feature coming next.");
}

document.getElementById("submitBtn").onclick = function(){

    if(confirm("Submit your quiz?")){
        window.location.href="result.html";
    }

}
