var todos = ["buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){


	if (input === "list") {
		listToDos();
	}
	else if (input === "new") {
		addToDo();
	}
	else if (input === "delete") {
		deleteToDo();
	}

	// ask again for new input
	input = prompt("What would you like to do?");
}

console.log("Ok you quit the app");


function listToDos(){
	console.log("**********");

	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);

	});

	console.log("**********");
}


function addToDo(){
	// ask for new todo
	var newTodo = prompt("Enter a new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Added todo")
}

function deleteToDo () {
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");

	//delete that todo
	todos.splice(index, 1); // index var is the input by the user to be deleted and the #1 is the number 
	//of items from the array to be deleted, in this case we only want the one item to be deleted.
	console.log("Deleted todo");

	};


