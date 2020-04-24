var time = 0;
var question;
var correctGuess = 0;
var incorrectGuess = 0;
var questionCount = 0;
var twentySecondTimer;



var qLead = document.getElementById("lead");


function startQuiz() {
qLead.innerHTML = questionsArr[0].question;  

}
startQuiz();




//function start game on button click

//get questions 

