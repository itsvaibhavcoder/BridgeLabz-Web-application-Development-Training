function addTwo(num: number): number{
     return num+2;
     //return "Hello"
}
let myValue = addTwo(5)

function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("vaibhav");

function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("vaibhav", "vrs@gmail.com", true)

let loginUser = (name: string, email: string, isPaid: boolean=false)=>{}
loginUser("vaibhav", "vrs@gmail.com", true)

const getHello = (s: string):string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string=> {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string):never{
    throw new Error(errmsg);
}