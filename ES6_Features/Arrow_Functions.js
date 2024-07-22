// Arrow functions provide a shorter syntax for writing functions and lexically bind the this value.

// Arrow functions dont have their own binding to this, arguents, or super, and should not be used as methods.

// Arrow functions cannot be used as constructors. calling them with new throws a TypeError. They also dont have access to the new.target keyword.

// Arrow functions cannot use yield within their body and cannot be created as generator functions.

// Syntax:
hello = ()=>{
    return "Hello World !"
}

//Sum function with normal function :
const sum = function(a,b){
    return a + b;
}
console.log(sum(6,7));

//Sum function with Arrow function :
const sumArrow =(a,b)=>{
    return a + b;
}
console.log(sumArrow(6,7));

//More consise syntax:
const sumMoreEasy = (a,b)=> a+b;
console.log(sumMoreEasy(5,6));