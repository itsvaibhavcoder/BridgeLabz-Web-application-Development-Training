//1.Dynamic Size
//JS array can grow and shrink dynamically.

let fruits = ['banana','apple'];
console.log(fruits);

//Adding Element
fruits.push('peach');

//Removing an Element
fruits.pop();

//2. Indexed Access
console.log(fruits[0]); // Output: banana
console.log(fruits[2]); // Output: peach

//3.Mixed Data Types
//An array can hold elements of different types

let mixedArray = [1,'two', {key : 'value'}, [3,4]];
console.log(mixedArray[2]);
console.log(mixedArray[2].key);

//4.Array Methods
//Adding/removing elements

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.
// shift(): Removes the first element from an array.
// unshift(): Adds one or more elements to the beginning of an array.
// splice(): Adds/removes elements at a specific index.

// push
fruits.push('peach');
console.log(fruits); // Output: ['banana', 'apple', 'peach']

// pop
fruits.pop();
console.log(fruits); // Output: ['banana', 'apple']

// shift
fruits.shift();
console.log(fruits); // Output: ['apple']

// unshift
fruits.unshift('mango');
console.log(fruits); // Output: ['mango', 'apple']

// splice
fruits.splice(1, 0, 'orange');
console.log(fruits); // Output: ['mango', 'orange', 'apple']

//5. Sparse Arrays
//Sparse arrays can have empty slots.

let sparseArray = [1, , 3];
console.log(sparseArray); // Output: [1, empty, 3]
console.log(sparseArray[1]); // Output: undefined

//6. Array Properties
//The length property indicates the number of elements in an array.

console.log(fruits.length); // Output: 3

// Manually adjusting the length
fruits.length = 5;
console.log(fruits); // Output: ['banana', 'apple', 'peach', empty × 2]
console.log(fruits.length); // Output: 5

//7. Array are object
//Arrays in JavaScript are a special type of object.

let fruits = ['banana', 'apple'];
fruits.customProperty = 'I am a custom property';
console.log(fruits.customProperty); // Output: I am a custom property

// Arrays inherit from Array.prototype
console.log(Array.prototype.isPrototypeOf(fruits)); // Output: true






