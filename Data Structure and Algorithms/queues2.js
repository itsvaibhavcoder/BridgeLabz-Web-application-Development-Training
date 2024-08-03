class Queue{
    constructor(){
        this.items = []
    }

    //different operation in Queue
    //enqueue, dequeue, size, isEmpty, front, printQueue
    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        else return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            return "Underflow";
        }
        else {
            return this.items[0];
        }
    }

    isEmpty(){
        return this.items.length ===0;
    }

    size(){
        return this.items.length;
    }

    printQueue(){
        console.log(this.items.toString())
    }
}

let myQueue = new Queue();
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();
myQueue.printQueue();

