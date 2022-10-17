let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	let fahrenheit = (value * 1.8) + 32;
	return fahrenheit
});

console.log(arrayOfFahrenheitValues);


