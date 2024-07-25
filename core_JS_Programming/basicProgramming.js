// Variables
// Var : Function-scoped and can be redeclared.
// Let : Block-scoped and cannot be redeclared in the same scope.
// const : Block-scoped and cannot be redeclared or reassigned.

if (true) {
    var x = 10; // function-scoped
    let y = 20; // block-scoped
    const z = 30; // block-scoped
}
console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined

var x = 10;
let y = 20;
const z = 30;

//Control Structures

// if -else :

if(x>y){
    console.log("X is grater than y");
}
else{
    console.log("y is greater than x");
}

// for loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop:
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

