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
const QUESTION_COUNT = 11;
const NEXT_QUESTION_COUNT = 6;
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
    document.getElementById("response").innerHTML = "";
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
            answerIsWrong();
            clearInterval(qInterval);
            fiveSecondTimer(); 

        }

        buttonBlock = true;
    }
}

function scoreCard() {
    qLead.style.display = "none";
    document.getElementById("lead1").classList.add("hide");
    document.getElementById("playButton").style.display = "block";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("youGot").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("youGot").innerHTML = "You got:";
    document.getElementById("score").innerHTML = score;
    if (score >= questionsArr.length * 0.7) {
        document.getElementById("response").innerHTML = "Good Job!";
    }
    else {
        document.getElementById("response").innerHTML = "Better luck next time.";
    }

}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("playButton").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("youGot").style.display = "none";
    document.getElementById("response").innerHTML = "";

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
    if (buttonBlock == false) {
        buttonBlock = true;
    }
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
            scoreCard();
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

