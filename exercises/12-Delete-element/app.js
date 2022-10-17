let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

 //your code below


function deletePerson(query) {
   return people.filter(function(el) {
       return el > -1;
   })
 }
 

 console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
 