console.log('Hello World from Nodejs');

const tutorial = require('./tutorial');

console.log(tutorial);
console.log(tutorial.sum(1, 2));
let newMath = new tutorial.SomeMathObject;

let {sum, product, SomeMathObject} = tutorial;
console.log(sum(1, 2));
let newMath2 = new SomeMathObject;
