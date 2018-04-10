

function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i])
	}
}

printReverse([1, 2, 3, 4, 5]);


function printAlphaReverse (arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	};
}

printAlphaReverse(["a", "b", "c"]);


console.log("*************************************");

function isUniform (usrInput) {

	var temp = usrInput[0];

	for (var i = 1; i < usrInput.length; i++) {
		if (usrInput[i] !== temp) {
			return false;
		}
	}
	return true;
}


function sumArray (numbers) {

	var temp = 0;
	for (var i = 0; i < numbers.length; i++) {
		temp = numbers[i] + temp;
	}
	console.log(temp);
};


function forEMax (arr) {

	var max = arr[0];
	arr.forEach(function(ele){

		if (ele > max) {
			max = ele;
		}
	})
	return max;

}

