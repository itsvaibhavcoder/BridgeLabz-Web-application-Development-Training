//Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

//Destructuring in Array:
const x = [1,2,3,4,5];
// const [y,z] = x;
// console.log(y) //1
// console.log(z) //2

const [y,z, ...rest] = x;
console.log(y); //1
console.log(z); //2
console.log(rest); // 3 4 5

//Destructuring in Objects
const Person = {name : "Jane", age: 25};
const {name, age} = Person;
console.log(name, age);
