type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser : User={
    _id: "1234",
    name:"vaibhav",
    email: "vrs@gmail.com",
    isActive: false
}
myUser.email = "h@gmail.com"
// myUser._id = "asa" --> Not allowed
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

//Intersection of types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// Similar to above
// type cardDetails = {
//     number: string;
//     cardDate: string;
//     cvv: number;
// }

//Example
const myCard: cardDetails = {
    cardnumber: "1234-5678-9012-3456",
    cardDate: "12/24",
    cvv: 123
}