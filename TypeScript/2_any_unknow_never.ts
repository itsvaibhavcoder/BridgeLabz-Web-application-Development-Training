//any: Represents any type of value, bypassing TypeScript's type checking.
let anything: any = 42;
anything = "Hello";
anything = true;

//unknown:Represents any value, but requires type checking before using it.
let uncertain: unknown = 42;
if(typeof uncertain === 'number'){
    console.log(uncertain + 1); //valid
}

//never: Represents values that never occur, often used for functions that throw errors or never return.
function throwError(message: string): never{
    throw new Error(message);
}