//1. Creating Strings
//Strings in JavaScript can be created using single quotes ('), double quotes ("), or backticks (`) for template literals.

let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, World!
console.log(templateLiteralString); // Output: Hello, World!

//2. String Length
//The length property returns the number of characters in a string.
console.log(text2
.length); 

//3. Accessing Characters
//Characters in a string can be accessed using bracket notation.
console.log(text
[0]); // Output: J
console.log(text
[4]); // Output: S

//4. String Methods

// Common Methods
// charAt(): Returns the character at a specified index.
// indexOf(): Returns the index of the first occurrence of a specified value.
// lastIndexOf(): Returns the index of the last occurrence of a specified value.
// slice(): Extracts a section of a string and returns it as a new string.
// substring(): Similar to slice(), but cannot accept negative indices.
// substr(): Extracts a part of a string, starting at a specified index and extending for a given number of characters.
// toLowerCase(): Converts the string to lowercase.
// toUpperCase(): Converts the string to uppercase.
// trim(): Removes whitespace from both ends of a string.
// replace(): Replaces a specified value with another value in a string.
// split(): Splits a string into an array of substrings.

let text2 = 'JavaScript is fun';

// charAt
console.log(text2
.charAt(0)); // Output: J

// indexOf
console.log(text2
.indexOf('a')); // Output: 1

// lastIndexOf
console.log(text2
.lastIndexOf('a')); // Output: 3

// slice
console.log(text2
.slice(0, 10)); // Output: JavaScript

// substring
console.log(text2
.substring(0, 10)); // Output: JavaScript

// substr
console.log(text2
.substr(0, 10)); // Output: JavaScript

// toLowerCase
console.log(text2
.toLowerCase()); // Output: javascript is fun

// toUpperCase
console.log(text2
.toUpperCase()); // Output: JAVASCRIPT IS FUN

// trim
let paddedText = '   JavaScript   ';
console.log(paddedText.trim()); // Output: JavaScript

// replace
console.log(text2
.replace('fun', 'awesome')); // Output: JavaScript is awesome

// split
console.log(text2
.split(' ')); // Output: ['JavaScript', 'is', 'fun']

//5. Template Literals
//Template literals allow embedded expressions and multi-line strings.

let name = 'Vaibhav';
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

let multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);
// Output:
// This is a string
// that spans across
// multiple lines.

//6. String Immutability
//Strings are immutable, meaning their characters cannot be changed directly.

let text = 'Hello';
text[0] = 'h'; // This will not change the string
console.log(text); // Output: Hello

// To change a string, you must create a new string
text = 'h' + text.slice(1);
console.log(text); // Output: hello

//7. Comparing Strings
//Strings can be compared using comparison operators.

let a = 'apple';
let b = 'banana';

console.log(a === b); // Output: false
console.log(a < b);  // Output: true (lexicographical comparison)






