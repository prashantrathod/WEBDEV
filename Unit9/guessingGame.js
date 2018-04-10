var guessedNum = 7;
var tooHigh = "You Guessed too high, try again!"
var tooLow = "You Guessed too low, try again!"

var stringGuess = prompt("Enter a number");
var input = Number(stringGuess);

if (input === guessedNum) {
	alert("You Guessed Corectly, well done");
}

else if (input < guessedNum){
	alert("You Guessed too low");
}

else {
	alert("You guessed too high");
}