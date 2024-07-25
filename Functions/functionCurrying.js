//Function Currying: A technique where a function returns another function that can be called with the remaining arguments.

function multiply(a){
    return function(b){
        return a*b;
    };
}

const double = multiply(2);
console.log(double(5));