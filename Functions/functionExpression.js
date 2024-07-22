//Function Expression: A function can be defined and assigned to a variable. This is known as a function expression.

// Anonymous Function Expression: As shown above, the function does not have a name.
const add = function(a,b){
    return a+b;
  }
  
  console.log(add(5,3));
  
  // Named Function Expression: You can also provide a name to the function, which is useful for debugging.
  
  const multiply = function multiplyNumbers(a,b){
      return a * b;
  };
  
  console.log(multiply(4,5));