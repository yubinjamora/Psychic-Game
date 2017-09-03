var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessedLetters = [];

var userGuess = null;

var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


document.onkeyup = function(event) {

    
    var userGuess = event.key;

   
    if (guessedLetters.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessedLetters[guessedLetters.length]=userGuess;
        
        guessesLeft--;
    }

    if (computerGuess == userGuess) {
        wins++;
        guessesLeft = 9;
        guessedLetters = [];
        
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        guessedLetters = [];
        
    }

    
    var html = 
    "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
    "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + 
    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + 
    guessedLetters + "</h4></p>";
    
    document.querySelector("#game").innerHTML = html;

}

