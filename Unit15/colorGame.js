// var colors = [

// 	"rgb(255, 0, 0)", // spaces are important
// 	"rgb(255, 255, 0)", // spaces are important
// 	"rgb(0, 255, 0)", // spaces are important
// 	"rgb(0, 255, 255)", // spaces are important
// 	"rgb(0, 0, 255)", // spaces are important
// 	"rgb(255, 0, 255)", // spaces are important
// ]

var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');


init();

function init(){
	//mode buttons event listeners:
	setupModeButtons();
	//setup squares:
	setupSquares();
	reset();
}

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//Turnery operator .. same as if statement below:
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			// if (this.textContent === "Easy") {
			// 	numSquares = 3;
			// }else{
			// 	numSquares = 6;
			// }
			reset();
	})
};
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//add initial colours to squares
		// squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares:
		squares[i].addEventListener("click", function(){
			//grab colour of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare colour to picked colour
			console.log(clickedColor, pickedColor);
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
				else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
		})
	};
}


function reset(){

	//genarate all new colors
	colors = genarateRandomColors(numSquares);
	//pick new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares 
	resetButton.textContent = "New Colours";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	};
	h1.style.backgroundColor = "steelblue";
	//resetButton.textContent = "New colours";
	messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = genarateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	};
// })

// hardBtn.addEventListener("click", function(){
// 		hardBtn.classList.add("selected");
// 		easyBtn.classList.remove("selected");
// 		numSquares = 6;
// 		colors = genarateRandomColors(numSquares);
// 		pickedColor = pickColor();
// 		colorDisplay.textContent = pickedColor;
// 		for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	});





resetButton.addEventListener("click", function(){

	reset();
	// //genarate all new colors
	// colors = genarateRandomColors(numSquares);
	// //pick new random colors from array
	// pickedColor = pickColor();
	// //change colorDisplay to match pickedColor
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares 
	// this.textContent = "New Colours";
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// };
	// h1.style.backgroundColor = "steelblue";
	// //resetButton.textContent = "New colours";
	// messageDisplay.textContent = "";
})

function changeColors (color) {
	// loop through all squares

for (var i = 0; i < squares.length; i++) {
	// change each color to match given color
	squares[i].style.backgroundColor = color;
};
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function genarateRandomColors(num){
	//make random array
	var arr = []
	//add num random colors to that array
	for (var i = 0; i < num; i++) {
		//get a random color and push in to array
		arr.push(randomColor())

	};

	//return that array
	return arr;

}

function randomColor () {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256)

	// "rgb (r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";

}













