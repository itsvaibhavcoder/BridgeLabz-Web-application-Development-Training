//Map :
// A collection of keyed data items, similar to an Object. But the main difference is that Map allows keys of any type.
let map = new Map();
map.set('name', 'john')
console.log(map.get('name'));

//Set:
//A collection of values where each value must be unique.

let set = new Set();
set.add(1);
set.add(2);
set.add(1); //duplicate value, will not be added

console.log(set);
