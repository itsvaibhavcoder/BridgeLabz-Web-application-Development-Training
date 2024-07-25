//WeakMap
//Similar to Map but keys must be objects, and they are weakly referenced.

let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // "value"

// weakSet :
// Similar to Set but only objects can be stored, and they are weakly referenced.

let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj);
console.log(weakSet.has(obj2)); // true