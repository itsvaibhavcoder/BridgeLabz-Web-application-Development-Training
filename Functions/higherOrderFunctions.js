// Higher-Order Function: A function that accepts another function as an argument or returns a function.

function performOperation(a,b,operation){
   return operation(a,b); 
}

const add = (x,y) => x+y;
const multiply = (x,y) => x*y;

console.log(performOperation(5,3,add));
console.log(performOperation(5,3,multiply));