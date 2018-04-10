alert("Connected");

var userInput;

userInput = prompt("Are we there yet?");

while(userInput.indexOf("yes") === -1){

	userInput = prompt("Are we there yet?");
}

alert("Yay we made it");

// the way this works is by checking whether the input value contains the word 'yes', 
//if so it moves straight to the alert, however if it does not contain the word 'yes',
//then it returns a '-1', and therefore continues iterating through the while loop. 