function isEven(number){

	if (number % 2 === 0) {
		return true;
	}
	else return false;

}

function factorial(input){

var result = 1;
	if(input < 0){
		return -1;
	}
	else if (input == 0) {
		return -1;
	}
	else{
		 for(var i = 2; i <= input; i++){
			result *= i;
		}
		return result;
	}

}

function kebabToSnake(string){

	return string.replace(/-/g, '_');

}

