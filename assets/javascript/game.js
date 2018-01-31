// Array that lists out all of the options (letters of the alphabet)

var letters = ["a", "b", "c", "d", "e,", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins and losses. They start at 0.

var wins = 0;
var losses = 0;

// Variable to count the number of guesses remaining before user takes an L

var guesses = 9;

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

    // if (guesses === 0) {
    //     guesses+9;
    // }

// For loops through the process

    // for (var i = 9; i <= guesses; i--) {
    //     console.log(guesses[i]);
    //}
    
//Push to HTML markup

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("userGuess").innerHTML = "Your Guesses so far: " + userGuess;
}
