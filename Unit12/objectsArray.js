var resteraunts = [
	{
		name: "Blue Zenza",
		hasBeen: true,
		rating: 3.9
	},

	{
		name: "Barbecoa",
		hasBeen: false,
		rating: 4.4
	},
	{
		name: "Vapianos",
		hasBeen: true,
		rating: 3.5
	}
]

resteraunts.forEach(function(resteraunt){

	
	console.log(buildingString(resteraunt));


});


function buildingString(resteraunt){

	var result = "You have ";

	if (resteraunt.hasBeen) {
		result += "eaten at ";
	}
	else{
		result += "not eaten at ";
	}
	result += "\"" + resteraunt.name + "\" - ";
	result += resteraunt.rating + " stars";
	return result;

}