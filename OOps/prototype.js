let myName = "hitesh   ";
let myChannel = "chai   ";

//console.log(myName.trim().length);
//console.log(myName.trueLength);

let myHero = ["thor", "spiderman"];
let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is present in all objects`);
    }
};

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`)
}

// heroPower.hitesh();
// myHero.hitesh();

//let modify the power of array
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//heroPower.heyHitesh(); // throw error
myHero.heyHitesh();

//Inheritance

const user = {
    name: "chai",
    email: "chai@google.com",
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    ___proto__: TeachingSupport //Protypal Inheritance, it is out dated
};

//modern syntax of prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

//Scenario: need to calculate the true length of the string
let anotherUsername = "ChaiAurCode      ";

//Injecting new method to string object
String.prototype.truelength = function(){
   //console.log(`${this.anotherUsername.trim().length}`);
   console.log(`${this}`);
   console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength(); //this--> anotherUsername
"hitesh".truelength(); //this--> hitesh
"icetea".truelength(); //this--> icetea


