var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
	
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});

};


// ANS to counts exercise:

// var table = 0;
// var sum = 0;
// var counter = 0;
// var tabled = document.querySelectorAll("tr");

// for (var i = 0; i < tabled.length; i++) {
// 	counter++;
// 	console.log("counter");
// };

// 	table = document.querySelectorAll("table").length;
// 	sum = counter - table;
// 	console.log("counter");
// 	console.log("table");
// 	console.log("sum");

// this is the correct answer:


document.querySelectorAll("tr").length - document.querySelectorAll("table").length;