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
let score = 0;
let count = 10;
let newCount = 5;
let timer;



function getQuestion() {
    document.getElementById("lead1").classList.remove("hide");
    let q = questionsArr[currrentQuestionIndex];
    qLead.innerHTML = q.question;
    choice1.innerHTML = q.choiceA;
    choice2.innerHTML = q.choiceB;
    choice3.innerHTML = q.choiceC;
    choice4.innerHTML = q.choiceD;
}


function answerIsCorrect() {
    document.getElementById("response").innerHTML = "Correct!";
    
}
function answerIsWrong() {
    document.getElementById("response").innerHTML = "Incorrect!";
}


function checkAnswer(answer) {
    if(questionsArr[currrentQuestionIndex].correct == answer) {
        score++;
        answerIsCorrect();
        clearInterval(timerInterval);
        fiveSecondTimer();
        
    } 
    else {
        score--;
        answerIsWrong();
        clearInterval(timerInterval);
        fiveSecondTimer(); 

    }

    if(newCount === 0 || count === 0) {
        currrentQuestionIndex++
        getQuestion();
        qTimer();
        clearInterval(timerInterval);
        clearInterval(newTimerInterval);
        
    } 
    else {
        clearInterval(timerInterval);
    }
}



function startQuiz() {
    document.getElementById("playButton").style.display = "none";
    
    qTimer();
    getQuestion();
    

}


function qTimer() {
  let timerInterval = setInterval(function() {
    counter.innerHTML = count;
    count--;

    if (count === 0) {
        answerIsWrong();
        counter.innerHTML = "";
        fiveSecondTimer();
            if (currrentQuestionIndex < lastQuestionIndex) {
                currrentQuestionIndex++;
                getQuestion();
            }
            else {
                clearInterval(timerInterval);
            }
        
    }

  }, 1000);
}


function fiveSecondTimer() {
    let newTimerInterval = setInterval(function() {
        counter.innerHTML = "Next Question in: " + newCount;
        newCount--;
    
        if (newCount === 0) {
            counter.innerHTML = "";
            getQuestion();
            clearInterval(newTimerInterval);
        }
    
 }, 1000);
}