//In TypeScript, you can specify types for variables, function parameters, and return values. 

//Basic Types
let isActive: boolean = true;
//isActive = 12 --> It will throw error
let age: number = 25;
let username: string = 'Vaibhav';

// Array Type
// Use for storing same data type values, flexible length, Indexed access
let scores: number [] = [90, 85, 88];
scores.push(1); //Allow 

//Tuple types
//Can be use for storing different data type values, fixed length, indexed access
let user: [number, string] = [1,'Vaibhav'];
//user.push(true); 
//console.log(user)

//Enum
enum Role{
    Admin, 
    User,
    Guest
}

let role: Role = Role.Admin;
console.log(role);