let lastQuestionIndex = questionsArr.length-1;
let currentQuestionIndex = 0;
let qLead = document.getElementById("lead");
const choice1 = document.getElementById("A");
const choice2 = document.getElementById("B");
const choice3 = document.getElementById("C");
const choice4 = document.getElementById("D");
let progress = document.getElementById("progress");
let counter = document.getElementById("counter");
let score = 0;
const QUESTION_COUNT = 6;
const NEXT_QUESTION_COUNT = 5;
let count = QUESTION_COUNT;
let nextCount = NEXT_QUESTION_COUNT;
let qInterval = null;
let nextQInterval = null;
let buttonBlock = false;



function getQuestion() {
    document.getElementById("lead1").classList.remove("hide");
    let q = questionsArr[currentQuestionIndex];
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
    if (buttonBlock == false) {
    
        if(questionsArr[currentQuestionIndex].correct == answer) {
            score++;
            answerIsCorrect();
            clearInterval(qInterval);
            fiveSecondTimer();
            
        } 
        else {
            score--;
            answerIsWrong();
            clearInterval(qInterval);
            fiveSecondTimer(); 

        }

        if(nextCount === 0 || count === 0) {
            currentQuestionIndex++
            getQuestion();
            qTime
            clearInterval(qInterval);
            clearInterval(nextQInterval);
            
        } 
        else {
            clearInterval(qInterval);
        } 
        buttonBlock = true;
    }
}

function scoreCard() {
    

}

function startQuiz() {
    document.getElementById("playButton").style.display = "none";
    
    qTimer();
    getQuestion();
    

}

function showQTime() {
    count--;
    counter.innerHTML = count;
    if (count === 0) {
        answerIsWrong();
        fiveSecondTimer();
    }
    
    return count;
}

function showNextQTime() {
    nextCount--;
    counter.innerHTML = "Next Question in: " + nextCount;
    
    if (nextCount === 0) {
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            getQuestion();
            qTimer();
        }
        else {
            counter.innerHTML = "";
        }
    }
    
    return nextCount;
}

function qTimer() {
    count = QUESTION_COUNT;
    showQTime();
     qInterval = setInterval(() => {
        if (showQTime() == 0) { clearInterval(qInterval) }
    }, 1000);
}


function fiveSecondTimer() {
    nextCount = NEXT_QUESTION_COUNT;
    nextQInterval = setInterval(() => {
        if (showNextQTime() == 0) { 
            buttonBlock = false;
            clearInterval(nextQInterval) 
        }

    }, 1000);
}

