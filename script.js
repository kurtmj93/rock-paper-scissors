// stores game history

let gameHistory = {
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0
}

// querySelect HTML elements

const message = document.querySelector("#message");
const buttonPlay = document.querySelector("#buttonPlay");
const optionButtons = document.querySelector("#options");
const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");
const htmlWins = document.querySelector("#wins");
const htmlLosses = document.querySelector("#losses");
const htmlTies = document.querySelector("#ties");

buttonPlay.onclick = playGame;

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

function reset() {
    optionButtons.style.display = 'none';
    buttonPlay.style.display = 'block';
    buttonPlay.innerText = 'Play Again';
}

function playGame() {
    buttonPlay.style.display = 'none';
    message.innerText = 'Choose your fighter!';
    optionButtons.style.display = 'block';
}

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

function achieve() {
    if (gameHistory.total == 30) {
        alert('Wow, dude, 30 games? Go outside and touch grass.')
    }
}

function gameLoop(userInput) {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = options[getRandomInt(3)];
    console.log(computerChoice);
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