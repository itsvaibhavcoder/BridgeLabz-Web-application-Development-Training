//Object Literals --> Literally Objects
const user = {
    username: "vaibhav",
    loginCount : 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Details")
        console.log(`Username: ${this.username}`);
        }
}
// console.log(user.username);
// user.getUserDetails()


//Constructor 
// new --> constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    // return this
}

// const userOne = User("hitesh", 12, true)

//It will override all the property of userone object function
// const userTwo = User("ChaiAurCode",11, false)

// console.log(userOne)
// console.log(userOne.username)

// Now it will give new instances of object function so no property will be override
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode",11, false);

