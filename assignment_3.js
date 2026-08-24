console.log(pet);
var pet = 'lucy';

console.log(animal);
let animal = 'tom';


// console.log(pet) prints "undefined", and this is because variables declared with "var" are hoisted to the top, allowing them to be declared and initialised with the "undefined" keyword and therefore accessed before actual initialization.
// console.log(animal) throws ReferenceError because the "let" keyword does not recognise a variable that has not been declared