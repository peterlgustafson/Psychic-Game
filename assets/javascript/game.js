// Array that lists out all of the options (letters of the alphabet)

var letters = ["a", "b", "c", "d", "e,", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array for all user guesses

var userGuess = ["Guess 1", "Guess 2", "Guess 3", "Guess 4", "Guess 5", "Guess 6", "Guess 7", "Guess 8", "Guess 9"]

// Creating variables to hold the number of wins and losses. They start at 0.

var wins = 0;
var losses = 0;

// Variable to count the number of total guesses and guesses remaining

var guesses = 10;
var guessesLeft = 9;

// Function to Pick Random Letter

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// Console Log to log computer choice of random letter

console.log(computerChoice);

// Document User's Guess 

document.onkeypress = function (event) {
    var userGuess = event.key;

// If/Else Statements

    if (userGuess === computerChoice) {
        wins++;
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses+=9;
    }

//Console Log all User Guesses
console.log(userGuess.toString)

    //Function to re-run picking random letter

// var resetcomputerChoice = letters[Math.floor(Math.random() * letters.length)];

// For loops through the process

    // for (var i = 10; i >= guesses.length; i--) {
    //     console.log(guesses[i]);
    // }
    
//Push to innerHTML markup

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("userGuess").innerHTML = "Your Guesses so far: " + userGuess;
}
