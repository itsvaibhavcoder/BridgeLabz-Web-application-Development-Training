//IIFE expression are used for defining the private scope for declaration which prevent them to polluting global scope. They are immediately called after they declared

// Normal IIFEs
(function print(){
    console.log("Hello there !")
})(); // We have to explicitely put these semicolons to end the execution of these functions

//we can pass the parameters to these function
(function sum(a,b){
    console.log(a+b);
})(5,6); // Output : 11

// In case of arrow functions
(()=>{
    console.log("Hello arrow Function !")
})();

//Passing parameters to arrow functions(IIFEs)
((a,b)=>{
    console.log(a+b);
})(5,6);

