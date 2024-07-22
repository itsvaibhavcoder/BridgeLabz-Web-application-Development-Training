//The rest operator (...) allows you to represent an indefinite number of elements as an array.
// The spread operator (...) allows an iterable to expand in places where more than one argument or element is expected.

// Rest operators
// numbers -> array of arguments
// reduce --> function to reduce array value to specific
// acc --> for storing element sum
// curr --> current element of array 
// 0 --> initial value of accumulator
function sum(...numbers){
    return numbers.reduce((acc, curr) => acc+curr, 0)
}
console.log(sum(1,2,3,4));

// Spead Operators 
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combined = [...arr1, ...arr2];
console.log(combined);
