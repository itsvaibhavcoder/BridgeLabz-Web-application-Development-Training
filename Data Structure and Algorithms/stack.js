//A stack is a linear data structure that follows the Last In, First Out (LIFO) principle

//Stack Operations
// Push Operation: Add an element to the top of the stack.
// Pop Operation: Remove an element from the top of the stack.
// Peek Operation: View the top element without removing it.
// IsEmpty Operation: Check if the stack is empty.
// Size Operation: Get the number of elements in the stack.

//Implementing a Stack in JavaScript Using array
class Stack{
    constructor(){
        this.items = [];
  }
    
    //Push: Add element to the top of the stack
    push(element){
        this.items.push(element);
    }

    //Pop: Remove element from the top of the stack
    pop(){
        if(this.isEmpty()){
            return "Underflow";
        }
        else return this.items.pop();
    }

    //Peek: View the top element
    peek(){
        if(this.isEmpty()){
            return "No elements in stack";
        }
        else{
            return this.items[this.items.length-1];
        }
    }

    //isEmpty: Check if the stack is empty
    isEmpty(){
        return this.items.length ===0;
    }

    //Size: Get the number of elements in the stack
    size(){
        return this.items.length;
    }

    //Print the stack elements
    printStack(){
        let str = "";
        for(let i=0; i<this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); 
console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.isEmpty()); 
console.log(stack.size()); 
