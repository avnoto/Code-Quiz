var qLead = document.getElementById("lead");

function startQuiz() {

    qLead.innerHTML = questionsArr[0].question; 
    document.getElementById("playButton").style.display = "none";
    document.getElementById("choice1").style.display = "inline";
    document.getElementById("choice2").style.display = "inline";
    document.getElementById("choice3").style.display = "inline";
    document.getElementById("choice4").style.display = "inline";


    }
















var time = 0;
var question;
var correctGuess = 0;
var incorrectGuess = 0;
var questionCount = 0;
var twentySecondTimer;