//A queue is a linear data structure that follows the First In, First Out (FIFO) principle.

//Queue Operations
// Enqueue Operation: Add an element to the end of the queue.
// Dequeue Operation: Remove an element from the front of the queue.
// Front Operation: View the front element without removing it.
// IsEmpty Operation: Check if the queue is empty.
// Size Operation: Get the number of elements in the queue.

//Implementing a Queue in JavaScript Using array
class Queue{
    constructor(){
        this.items = [];
}

    //enqueue: Add element at the end
    enqueue(element) {
        this.items.push(element);
    }

    //dequeue: Remove element from front 
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        else{
            return this.items.shift();
        }
    }
    
    //front : View the front element
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        else{
            return this.items[0];
        }
    }

    //isEmpty: check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    //Size : Return number of element in the queue
    size() {
        return this.items.length;
    }

    //print the queue element
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue()); 
console.log(queue.dequeue()); 
console.log(queue.front()); 
console.log(queue.isEmpty()); 
console.log(queue.size()); 