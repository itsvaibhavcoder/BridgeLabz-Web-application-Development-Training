//ES6 provides shorthand syntax for defining object properties and methods.

const name = "Alice";
const age = 30;
const person = {
    name,
    age,
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    },
};


person.greet();