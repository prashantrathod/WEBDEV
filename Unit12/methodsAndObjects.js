console.log("Connected");

var comments = {}; // created the object.

comments.data = ["Good Job!", "Bye", "Lame..."]; // array containing data, within the object


//**************************//

//below is the code for a seperate function called print, which is unrelated to the 
//object. however by creating a method which sits inside the object, is a more organised 
//pattern for organising code!

// function print(arr){
// 	arr.forEach(function(el){
// 		console.log(el);
// 	})
// }

//************************//

// below is the same function within the object:

comments.print = function(){
	this.data.forEach(function(el){
	console.log(el);
	});
} 
