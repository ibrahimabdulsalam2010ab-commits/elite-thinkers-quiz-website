document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value;

    if (name === "" || course === "") {
        alert("Please enter your name and select your course.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentCourse", course);

    window.location.href = "quiz.html";
});
