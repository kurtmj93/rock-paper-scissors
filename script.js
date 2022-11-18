/* # Module 03 Mini-Project: Rock, Paper, Scissors

In this activity, you will work with a group to build a game using only JavaScript.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.

### Specifications

* Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

* The computer's selection must be random to ensure a fair game.
*/

//stores game history

var gameHistory = {
    wins: 0,
    losses: 0,
    ties: 0
}

var options = ['Rock', 'Paper', 'Scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var computerChoice = '';

function computerRoll() {
    let int = getRandomInt(3); 
    computerChoice = options[int];
    return;
}

computerRoll();

console.log(computerChoice);

var playAgain = false;

function playGame() {
    userInput = prompt('Enter Rock, Paper or Scissors to play.', 'Rock');
    computerRoll();
    if (computerChoice == userInput) {
        gameHistory.ties++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". That's a tie! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Rock' && userInput == 'Paper') {
        gameHistory.wins++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Paper covers rock - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Rock' && userInput == 'Scissors') {
        gameHistory.losses++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". You got crushed! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Paper' && userInput == 'Rock') {
        gameHistory.losses++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Sorry, mate - you lose! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Paper' && userInput == 'Scissors') {
        gameHistory.wins++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Scissors tear paper to shreds - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Scissors' && userInput == 'Rock') {
        gameHistory.wins++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Rock CRUSHES scissors - you win! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else if (computerChoice == 'Scissors' && userInput == 'Paper') {
        gameHistory.wins++;
        alert('You played ' + userInput + '. Computer responds with ' + computerChoice + ". Ouch, scissors tore you up - you lose! Your game history:\n Wins: " + gameHistory.wins + "\n Losses: " + gameHistory.losses + "\n Ties: " + gameHistory.ties);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
            playGame();
        } else {
            return;
        }
    } else {
        alert('Please enter "Rock" or "Paper" or "Scissors" - I\'m serious.');
        playGame();
    }
}

playGame();