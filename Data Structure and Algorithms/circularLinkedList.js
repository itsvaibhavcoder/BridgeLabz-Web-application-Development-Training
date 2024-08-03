class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            newNode.next = newNode;
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(val) {
        if (this.head === null) {
            this.insertAtHead(val);
            return;
        }
        const newNode = new Node(val);
        let temp = this.head;
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
    }

    deleteAtHead() {
        if (this.head === null) return;
        let temp = this.head;
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        const delNode = this.head;
        temp.next = this.head.next;
        this.head = this.head.next;
        delNode.next = null; 
    }

    deleteNode(pos) {
        if (pos === 1) {
            this.deleteAtHead();
            return;
        }
        let temp = this.head;
        let count = 1;
        while (count !== pos - 1) {
            temp = temp.next;
            count++;
        }
        const toDelete = temp.next;
        temp.next = toDelete.next;
        toDelete.next = null; 
    }

    displayLinkedList() {
        if (this.head === null) return;
        let temp = this.head;
        let result = '';
        do {
            result += temp.data + ' ';
            temp = temp.next;
        } while (temp !== this.head);
        console.log(result.trim());
    }
}


const cll = new CircularLinkedList();
cll.insertAtHead(1);
cll.insertAtHead(2);
cll.insertAtHead(3);

console.log("Circular Linked List after inserting at head:");
cll.displayLinkedList();
cll.insertAtTail(4);
cll.insertAtTail(5);

console.log("Circular Linked List after inserting at tail:");
cll.displayLinkedList();

cll.deleteNode(2);


console.log("Circular Linked List after deleting at position 2:");
cll.displayLinkedList();

cll.deleteAtHead();

console.log("Circular Linked List after deleting the head:");
cll.displayLinkedList();
