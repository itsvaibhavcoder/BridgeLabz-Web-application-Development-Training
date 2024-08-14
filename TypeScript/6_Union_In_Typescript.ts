//In TypeScript, a union type allows a variable to hold values of multiple types. This is useful when you want to allow a variable to be of one of several types, but not necessarily all of them at once. 

let score: number | string = 33
score = 44
score = "55"

type user = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id:number
}

let vaibhav: user | admin = {name: "vaibhav", id: 45}
vaibhav = {username: "vs", id:334}

// function getDbId(id: number | string){
//     console.log(`DB id id: ${id}`);
// }
// getDbId(5);
// getDbId("5")

function getDbId(id: number | string){
    if(typeof id==="string"){
        return id.toLowerCase();
    }
}

//array
const data: number[]= [1,2,3]
const data2: string[]= ["1","2","3"]
const data3: string[] | number[] = [] //--It will store the all string type or number type

const data4: (string | number| boolean)[] = ["1","2","3",4]

let seatAllotment: "aisle"|"middle"|"window"
seatAllotment = "aisle"
// seatAllotment = "crew"