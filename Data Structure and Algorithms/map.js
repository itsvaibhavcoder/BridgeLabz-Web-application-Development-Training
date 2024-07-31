//A Map is a collection of key-value pairs where both keys and values can be of any type.

//Creating a Map
//To create a Map, use the Map constructor:
let myMap = new Map();

//Adding Key-Value Pairs
// You can add key-value pairs using the set method:
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
console.log(myMap);

//Accessing Values
//To get the value associated with a key, use the get method:
console.log(myMap.get('a'));
console.log(myMap.get('d'));

//Checking for Keys
console.log(myMap.has('a')); 
console.log(myMap.has('d'));

//Removing Key-Value Pairs
myMap.delete('b');
console.log(myMap);

//Iterating Over a Map
//You can iterate over the elements in a Map using for...of or the forEach method:
for (let [key, value] of myMap) {
    console.log(key, value);
}

myMap.forEach((value, key) => {
    console.log(key, value);
});

//Other Map Methods
myMap.clear();
console.log(myMap.size);
