// Default parameters allow you to specify default values for function parameters.

function multiply(a,b=2){
    return a*b;
}
console.log(multiply(5)) // 10
console.log(multiply(5,3)) // 15