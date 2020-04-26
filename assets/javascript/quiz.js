questionsArr = []
let lastQuestionIndex = questionsArr.length-1;
let currrentQuestionIndex = 0;
let qLead = document.getElementById("lead");
const choice1 = document.getElementById("A");
const choice2 = document.getElementById("B");
const choice3 = document.getElementById("C");
const choice4 = document.getElementById("D");
let progress = document.getElementById("progress");
let counter = document.getElementById("counter");


function getQuestion() {
    document.getElementById("lead1").classList.remove("hide");
    let q = questionsArr[currrentQuestionIndex];
    qLead.innerHTML = q.question;
    choice1.innerHTML = q.choiceA;
    choice2.innerHTML = q.choiceB;
    choice3.innerHTML = q.choiceC;
    choice4.innerHTML = q.choiceD;
}


// function answerIsCorrect() {
//     document.getElementById(currrentQuestionIndex).style.backgroundColor = "green";
// }
// function answerIsWrong() {
//     document.getElementById(currrentQuestionIndex).style.backgroundColor = "red";
// }


// function checkAnswer(answer) {
//     if(questionsArr[currrentQuestionIndex].correct == answer) {
//         score++;
//         answerIsCorrect();
//     } 
//     else {
//         answerIsWrong();
//     }
//     if(currrentQuestionIndex < lastQuestionIndex) {
//         count = 0;
//         currrentQuestionIndex++;
//         questionRender();
//     } 
//     else {
//         clearInterval(timer);
//     }
// }



function startQuiz() {
    document.getElementById("playButton").style.display = "none";
    document.getElementById("nextButton").classList.remove("hide");
    
    getQuestion();

    }

function nextQuestion() {
    currrentQuestionIndex++;
}

















var time = 0;
var question;
var correctGuess = 0;
var incorrectGuess = 0;
var questionCount = 0;
var twentySecondTimer;