class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise. `);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks `);
    }
}
const dog1 = new Animal("Husky")
const dog2 = new Dog("Rex");
dog1.speak();
dog2.speak();