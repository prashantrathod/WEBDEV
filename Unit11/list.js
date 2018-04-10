var todos = ["buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){


	if (input === "list") {
		console.log(todos);
	}
	else if (input === "new") {
		// ask for new todo
		var newTodo = prompt("Enter a new todo");
		// add to todos array
		todos.push(newTodo);
	};

	// ask again for new input
	input = prompt("What would you like to do?");

}

console.log("Ok you quit the app");