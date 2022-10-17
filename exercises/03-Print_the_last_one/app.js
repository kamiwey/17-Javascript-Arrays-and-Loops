function generateRandomArray()
{
	let auxArray = [];
	let randomLength = Math.floor(Math.random()*100);
	for(let i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
let myStupidArray = generateRandomArray();

//Your code here

var lastposition = myStupidArray.length -1;
let theLastOne = myStupidArray[lastposition];
console.log(theLastOne);

