//1. Creating Objects
//Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any type of data.

// Using object literal notation
let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};
  
  // Using the Object constructor
  let person2 = new Object();
  person2.name = 'Bob';
  person2.age = 30;
  person2.isStudent = false;
  
  console.log(person); // Output: { name: 'Alice', age: 25, isStudent: true }
  console.log(person2); // Output: { name: 'Bob', age: 30, isStudent: false }

//2. Accessing Properties
//You can access properties of an object using dot notation or bracket notation.

// Dot notation
console.log(person.name); // Output: Alice
  
// Bracket notation
console.log(person['age']); // Output: 25

// 3. Adding and Modifying Properties
// You can add new properties or modify existing ones.

// Adding a new property
person.isStudent = true;
console.log(person); // Output: { name: 'Alice', age: 25, isStudent: true }
  
// Modifying an existing property
person.age = 26;
console.log(person); // Output: { name: 'Alice', age: 26, isStudent: true }

//4. Removing Properties
//You can remove properties using the delete operator.

let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};

delete person.isStudent;
console.log(person); // Output: { name: 'Alice', age: 25 }
  
//5. Checking Property Existence
// You can check if a property exists using the in operator or hasOwnProperty method.

let person = {
    name: 'Alice',
    age: 25
};
  
console.log('name' in person); // Output: true
console.log(person.hasOwnProperty('age')); // Output: true
console.log('isStudent' in person); // Output: false

// 6. Iterating Over Properties
// You can iterate over an object's properties using a for...in loop or Object.keys().

let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};
  
// Using for...in loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// isStudent: true
  
// Using Object.keys()
Object.keys(person).forEach(key => {
console.log(`${key}: ${person[key]}`);
});
// Output:
// name: Alice
// age: 25
// isStudent: true

// 7. Methods in Objects
// Objects can have methods, which are functions stored as properties.

let person = {
    name: 'Alice',
    age: 25,
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
};


person.greet(); // Output: Hello, my name is Alice

// 8. Nested Objects
// Objects can contain other objects.

let person = {
    name: 'Alice',
    age: 25,
    address: {
      city: 'Wonderland',
      zip: '12345'
    }
};
  
console.log(person.address.city); // Output: Wonderland

// 9. Object Destructuring
// You can extract properties from objects using destructuring assignment.
  
let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};
  
let { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

let person = {
    name: 'Alice',
    age: 25
};
  
let personCopy = { ...person, isStudent: true };
console.log(personCopy); // Output: { name: 'Alice', age: 25, isStudent: true }
  
let { name2, ...rest } = personCopy;
console.log(name2); // Output: Alice
console.log(rest); // Output: { age: 25, isStudent: true }

  