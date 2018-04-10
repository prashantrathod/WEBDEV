console.log("Print all numnbers between -10 and 19");

var num = -10;
while(num <= 19){
	console.log(num);
	num++;
}

console.log("Print even numbers between 10 and 40");

var evenNum = 10;

// while(evenNum <= 40){
// 	console.log(evenNum);
// 	evenNum += 2
// }

while(evenNum <= 40){
	if(evenNum % 2 === 0){
		console.log(evenNum);
	}
	evenNum += 1;
}

console.log("Print all odd numbers between 300 and 333");

var oddNum = 300;

// while(oddNum <= 333){
// 	console.log(oddNum);
// 	oddNum += 2;
// }


while(oddNum <= 333){
	if(oddNum % 2 !== 0){
		console.log(oddNum);
	}
	oddNum += 1;
}

console.log("Print all numbers divisible by 5 AND 3, between 5 and 50")

var divisibleNum = 5;

while(divisibleNum <= 50){
	if (divisibleNum % 5 === 0 && divisibleNum % 3 === 0) {

		console.log(divisibleNum);
	};
	divisibleNum++; 
}