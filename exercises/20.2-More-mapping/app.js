

let myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here

var newArray = myNumbers.map(myFunction)
	

	function myFunction(value) {
		var multiplicados = (value * 3);
		return multiplicados;
	}


	console.log(newArray);
