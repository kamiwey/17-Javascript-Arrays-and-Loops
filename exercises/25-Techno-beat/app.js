// Add your code here
function lyricsGenerator(enterArray){
    let beat ="";
    for (let i = 0; i < enterArray.length; i++) {
        if (enterArray[i] === 0){
            beat += "Boom ";
        }
    else if (enterArray[i] === 1){
        beat += "Drop the base ";
        if (enterArray[i-1] === 1 && enterArray[i-2] === 1){
            beat += '!!!Break the base!!! '
        }
    }
}
        return beat

}     
// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))