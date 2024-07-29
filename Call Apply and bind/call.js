//The call method in JavaScript is a function method that allows you to call a function with a specific this value and arguments provided individually. This is particularly useful for borrowing methods from one object and using them with another object without needing to copy the method.

let person1 = {
    firstName : "Shankar",
    secondName : "Ganesh",
    printFullName (){
        console.log(`${this.firstName} ${this.secondName}
            `)
    }
}

let printDetails = function(city, state){
    console.log(`${this.firstName} ${this.secondName} from ${city}, ${state}
        `)
}

let person2 = {
    firstName : "Sourav",
    secondName : "Ganguly"
}

person1.printFullName();

//function-borrowing
person1.printFullName.call(person2);

printDetails.call(person1,'Coimbatore','TamilNadu');

printDetails.call(person2,"Kolkata","West Bengal");
