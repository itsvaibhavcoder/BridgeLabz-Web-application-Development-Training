//The apply method in JavaScript is similar to the call method, but with a key difference: it takes an array of arguments instead of listing them individually. This can be particularly useful when the number of arguments is dynamic or when they are already in an array.
let college1 = {
    name: "Indian Institute of Technology (IIT)",
    city: "Chennai"
}

let college2 = {
    name: "Indian Institute of Management (IIM)",
    city : "Bangalore"
}

let collegeDetails = function(state, country) {
    console.log(`${this.name} located in ${this.city}, 
${state},
${country}
`)
}

let collegeDetailsWithArgs = function(...args) {
    console.log(`${this.name} located in ${this.city}, 
${args[0]},
${args[1]}
`)
}

// Function borrowing with arguments are passed as an Array
collegeDetails.apply(college1, ["Tamil Nadu","India"]);
collegeDetailsWithArgs.apply(college2,["Karnataka","India"]);