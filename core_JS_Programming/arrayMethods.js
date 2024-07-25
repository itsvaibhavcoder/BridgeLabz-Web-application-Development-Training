//forEach : Executes a provided function once for each array element.
let arr =[1,2,3,4,5];
arr.forEach(num=>console.log(num));

//filter
//Creates a new array with all elements that pass the test implemented by the provided function.

let evenNumbers = arr.filter(num=>num%2===0);
console.log(evenNumbers)

//map
//Creates a new array populated with the results of calling a provided function on every element in the calling array.

let squares = arr.map(num=>num*num);
console.log(squares);

//reduce
//Executes a reducer function on each element of the array, resulting in a single output value.

let sum = arr.reduce((acc,num)=> acc+num,0);
console.log(sum);

