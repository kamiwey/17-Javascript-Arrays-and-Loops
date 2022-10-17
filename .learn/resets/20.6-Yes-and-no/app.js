let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let boleans = theBools.map(myFunction);

function myFunction(num) {
    let result = [];
    if(num === 0){
        result.push('woko');
    } else{
        result.push('wiki');
    }
    return result;
}

console.log(boleans);