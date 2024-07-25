//Function Chaining: Calling multiple methods or functions in a single line of code, where each function returns an object that allows further method calls.

class Calculator{
    constructor(value = 0){
        this.value = value;
    }
    add(a){
        this.value +=a;
        return this;
    }
    subtract(a){
        this.value -=a;
        return this;
    }
    getResult(){
        return this.value;
    }
}

const result = new Calculator()
.add(10)
.subtract(3)
.getResult();

console.log(result)


