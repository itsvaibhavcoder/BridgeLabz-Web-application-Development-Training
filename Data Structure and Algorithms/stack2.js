//Stack using array
class stack{
    constructor(){
        this.items = [];
    }

    //Different operation in stack
    //push, pop, top, size and isEmpty
    push(value){
        this.items.push(value);
    }
    
    pop(){
        if(this.isEmpty()){
            return "UnderFlow";
        }
        else{
            return this.items.pop();
        }
    }
    
    top(){
        if(this.isEmpty()){
            return "UnderFlow";
        }
        else{
            return this.items[this.items.length-1];
        }
    }
    
    isEmpty(){
        return this.items.length ===0;
    }

    size(){
        return this.items.length;
    }

    printStack(){
        console.log(this.items.toString());
    }
    
}

let myStack = new stack();
myStack.push(3);
myStack.push(4);
myStack.push(4);
myStack.printStack();
myStack.pop();
myStack.top();
console.log(myStack.isEmpty());
console.log(myStack.size());