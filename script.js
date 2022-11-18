//stores game history

let gameHistory = {
    wins: 0,
    losses: 0,
    ties: 0
}

// querySelect HTML elements

const message = document.querySelector("#message");
const buttonPlay = document.querySelector("#buttonPlay");
const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");
const sectionOptions = document.querySelector("#options");

buttonPlay.onclick = playGame;

//three options for computer to click;

let options = ['Rock', 'Paper', 'Scissors'];

//random integer function

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//computer rolls rock paper or scissors

let computerChoice = '';

function computerRoll() {
    let int = getRandomInt(3); 
    computerChoice = options[int];
    return;
}

// computerRoll(); 
// console.log(computerChoice); testing computerRoll function

function playAgain() {
    playConfirm = confirm('Do you want to play again?');
        if (playConfirm) {
            playGame();
        } else {
            return;
        }
}

function playGame() {
    userInput = prompt('Enter Rock, Paper or Scissors to play.', 'Rock');
    computerRoll();
    if (computerChoice == userInput) {
        gameHistory.ties++;
        document.getElementById('ties').innerHTML = gameHistory.ties;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". That's a tie! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Rock' && userInput == 'Paper') {
        gameHistory.wins++;
        document.getElementById('wins').innerHTML = gameHistory.wins;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Paper covers rock - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Rock' && userInput == 'Scissors') {
        gameHistory.losses++;
        document.getElementById('losses').innerHTML = gameHistory.losses;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". You got crushed! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Paper' && userInput == 'Rock') {
        gameHistory.losses++;
        document.getElementById('losses').innerHTML = gameHistory.losses;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Sorry, mate - you lose! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Paper' && userInput == 'Scissors') {
        gameHistory.wins++;
        document.getElementById('wins').innerHTML = gameHistory.wins;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Scissors tear paper to shreds - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Scissors' && userInput == 'Rock') {
        gameHistory.wins++;
        document.getElementById('wins').innerHTML = gameHistory.wins;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Rock CRUSHES scissors - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else if (computerChoice == 'Scissors' && userInput == 'Paper') {
        gameHistory.losses++;
        document.getElementById('losses').innerHTML = gameHistory.losses;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Ouch, scissors tore you up - you lose! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain();
    } else {
        alert('Please enter "Rock" or "Paper" or "Scissors" - I\'m serious.');
        playGame();
    }
}