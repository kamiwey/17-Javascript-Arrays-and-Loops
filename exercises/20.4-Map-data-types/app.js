
let arrayOfStrings = ['1','5','45','34','343','34',6556,323];

let emptyArray = [];

let newArray = arrayOfStrings.map(function(val){
	emptyArray.push(typeof val);
});

console.log(emptyArray);
