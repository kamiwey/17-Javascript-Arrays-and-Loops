let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

var resultingNames = allNames.filter(function(name){
    return name.startsWith("R");
})

console.log(resultingNames);