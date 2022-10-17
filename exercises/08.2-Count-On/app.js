let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    if (typeof myArray[index] === "object"){
        hello.push(element);
    }
}

console.log(hello);

// me costo la vida averiguar como incluir el typeof en el if para que me diese lo que queria