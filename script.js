// stores game history
// how would I go about storing info such as - last five games were losses?

let gameHistory = {
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0
}

// querySelect HTML elements

const message = document.querySelector("#message");
const buttonPlay = document.querySelector("#buttonPlay");
const optionButtons = document.querySelectorAll(".choice");
const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");
const htmlWins = document.querySelector("#wins");
const htmlLosses = document.querySelector("#losses");
const htmlTies = document.querySelector("#ties");

// buttons do functions

buttonPlay.onclick = playGame;


// directly calling function e.g. buttonRock.onclick = gameLoop('Rock') was automatically running on refresh. this syntax is working properly

buttonRock.onclick = function() {
    gameLoop('Rock');
}
buttonPaper.onclick = function() {
    gameLoop('Paper');
}
buttonScissors.onclick = function() {
    gameLoop('Scissors');
}

//random integer function with maximum value

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// resets game state. iterates through class to hide user input buttons

function reset() {
    let i = 0;
    while (i < 3) {
        optionButtons[i].style.display ='none';
        i++;
    }
    buttonPlay.style.display = 'inline-block';
    buttonPlay.innerText = 'Play Again';
}

// iterates through class to show user input buttons

function playGame() {
    buttonPlay.style.display = 'none';
    message.innerText = 'Choose your fighter!';
    let i = 0;
    while (i < 3) {
        optionButtons[i].style.display ='inline-block';
        i++;
    }
}

// iterates counts in gameHistory object and updates html - no tie function as it's only used once, below

function countWin() {
    gameHistory.wins++;
    gameHistory.total++;
    htmlWins.innerText = gameHistory.wins;
}

function countLoss() {
    gameHistory.losses++;
    gameHistory.total++;
    htmlLosses.innerText = gameHistory.losses;
}

// checks for silly achievements and sends browser alert messages

function achieve() {
    let winPercent = (gameHistory.wins / (gameHistory.wins + gameHistory.losses));
    if (gameHistory.total == 40) {
        alert('Wow, dude, 40 games? Go outside and touch grass.')
    } else if ((gameHistory.wins+gameHistory.losses) > 9 && winPercent > 0.66) {
        alert('Your win percent is ' + winPercent*100 + "%. Pretty lucky!")
    } else if ((gameHistory.wins+gameHistory.losses) > 9 && winPercent < 0.33) {
        alert('Ouch. Your win percent is ' + winPercent*100 + "%. I swear it's not rigged.")
    } 
}

// here's the primary game loop

function gameLoop(userInput) {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = options[getRandomInt(3)];
    let standardGameMessage = 'You played ' + userInput + '. Computer responds with ' + computerChoice + ".";
    if (computerChoice == userInput) {
        gameHistory.ties++;
        gameHistory.total++;
        achieve();
        htmlTies.innerText = gameHistory.ties;
        message.innerText = standardGameMessage + " That's a tie!";
        reset();
    } else if (computerChoice == 'Rock' && userInput == 'Paper') {
        countWin();
        achieve();
        message.innerText = standardGameMessage + " Paper covers rock - you win!";
        reset();
    } else if (computerChoice == 'Rock' && userInput == 'Scissors') {
        countLoss();
        achieve();
        message.innerText = standardGameMessage + " You got crushed!";
        reset();
    } else if (computerChoice == 'Paper' && userInput == 'Rock') {
        countLoss();
        achieve();
        message.innerText = standardGameMessage + " Sorry, mate - you lose!";
        reset();
    } else if (computerChoice == 'Paper' && userInput == 'Scissors') {
        countWin();
        achieve();
        message.innerText = standardGameMessage + " Scissors tear paper to shreds - you win!";
        reset();
    } else if (computerChoice == 'Scissors' && userInput == 'Rock') {
        countWin();
        achieve();
        message.innerText = standardGameMessage + " Rock CRUSHES scissors - you win!";
        reset();
    } else if (computerChoice == 'Scissors' && userInput == 'Paper') {
        countLoss();
        achieve();
        message.innerText = standardGameMessage + " Ouch, scissors tore you up - you lose!";
        reset();
    }
}