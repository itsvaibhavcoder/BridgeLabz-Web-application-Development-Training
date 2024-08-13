const User = {
    name: "vaibhav",
    email: "vrs@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "vaibhav", isPaid: false, email: "vrs@gmail.com"}

createUser(newUser); //Bad behavious of Object 

