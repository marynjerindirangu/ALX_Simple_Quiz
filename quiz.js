// function to check users answer
function checkAnswer(){

    const correctAnswer ="4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

     const feedback = document.getElementById("feedback");

     if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // red text
        return;
    }

    const userAnswer = selectedOption.value;

    //Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green text
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red text
    }

}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);