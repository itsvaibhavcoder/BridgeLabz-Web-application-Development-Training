//A Set is a collection of unique values. It ensures that each value occurs only once in the collection, meaning no duplicates are allowed.

//Creating a Set
//To create a Set, you use the Set constructor:
let mySet = new Set();

//Adding Values
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet);

//Checking for Values
console.log(mySet.has(1)); 
console.log(mySet.has(4));

//Removing Values
mySet.delete(2);
console.log(mySet);

//Iterating Over a Set

//Using for .. of loop
for (let item of mySet) {
    console.log(item);
}

//Using forEach loop
mySet.forEach(item => {
    console.log(item);
});

//Other Set Methods
mySet.clear();
console.log(mySet.size);
