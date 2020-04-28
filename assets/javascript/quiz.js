let lastQuestionIndex = questionsArr.length-1;
let currentQuestionIndex = 0;
let qLead = document.getElementById("lead");
const choice1 = document.getElementById("A");
const choice2 = document.getElementById("B");
const choice3 = document.getElementById("C");
const choice4 = document.getElementById("D");
let progress = document.getElementsByClassName("progress-bar");
let counter = document.getElementById("counter");
let response = document.getElementById("response");
let playBtn = document.getElementById("play-button");
let youGot = document.getElementById("you-got");
let score = 0;
const QUESTION_COUNT = 11;
const NEXT_QUESTION_COUNT = 6;
let count = QUESTION_COUNT;
let nextCount = NEXT_QUESTION_COUNT;
let qInterval = null;
let nextQInterval = null;
let buttonBlock = false;

function getQuestion() {
    progress.item(0).setAttribute("style", "width:" + ((currentQuestionIndex + 1) / (lastQuestionIndex + 1) * 100) + "%");
    progress.item(0).setAttribute("aria-valuenow", (currentQuestionIndex + 1) / (lastQuestionIndex + 1) * 100);
    document.getElementById("lead1").classList.remove("hide");
    let q = questionsArr[currentQuestionIndex];
    qLead.innerHTML = q.question.italics();
    choice1.innerHTML = q.choiceA;
    choice2.innerHTML = q.choiceB;
    choice3.innerHTML = q.choiceC;
    choice4.innerHTML = q.choiceD;
    response.innerHTML = "";
    
}


function answerIsCorrect() {
    response.innerHTML = "Correct!";
    response.style.color = "green";
}

function answerIsWrong() {
    response.innerHTML = "Incorrect! The correct answer is: " + questionsArr[currentQuestionIndex].correct;
    response.style.color = "red";

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
    playBtn.style.display = "inline";
    playBtn.innerHTML = "Play Again";
    youGot.style.display = "block";
    document.getElementById("score").style.display = "block";
    youGot.innerHTML = "You got:";
    document.getElementById("score").innerHTML = score + " / 5";
    if (score >= questionsArr.length * 0.7) {
        response.innerHTML = "You're out of this world!";
        response.style.color = "green";
    }
    else {
        response.innerHTML = "Houston, we have a problem...";
        response.style.color = "red";
    }

}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    qLead.style.display = "block";
    playBtn.style.display = "none";
    document.getElementById("score").style.display = "none";
    youGot.style.display = "none";
    response.innerHTML = "";

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
    counter.innerHTML = "NEXT QUESTION IN: " + nextCount;
    
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

