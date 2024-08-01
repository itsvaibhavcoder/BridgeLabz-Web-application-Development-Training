//A singly linked list is a type of linked list where each node points to the next node in the sequence, and the last node points to null.
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    //Method to add a node at the end
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
    }

    //Method to add a node at a specific position
    insertAt(value, position){
        const newNode = new Node(value);
        if(position===0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let curr = this.head;
        let prev = null;
        let index = 0;
        while(index<position && curr){
           prev = curr;
           curr = curr.next;
           index++; 
        }
        if(curr){
            prev.next = newNode;
            newNode.next = curr;
        }
        else{
            prev.next = newNode;
        }
    }
    //Method to delete a node with a specific value
    deleteValue(value){
        if(!this.head) return;
        if(this.head.value === value){
           this.head = this.head.next;
           return;
        }
        let curr = this.head;
        let prev = null;
        while(curr && curr.value !==value){
            prev = curr;
            curr = curr.next;
        }
        if(curr){
            prev.next = curr.next;
        }
    }
    
    //Method to search for a node with a specific val
    search(value){
        let curr = this.head;
        while(curr){
            if(curr.value ===value){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    //Method to print the list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAt(4, 1);
list.deleteValue(2);
console.log(list.search(3));
list.printList();