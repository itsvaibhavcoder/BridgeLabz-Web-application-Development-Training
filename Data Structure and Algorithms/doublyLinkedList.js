class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        if (this.head !== null) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    insertAtTail(val) {
        if (this.head === null) {
            this.insertAtHead(val);
            return;
        }
        const newNode = new Node(val);
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }

    deleteAtHead() {
        if (this.head === null) return;
        const delNode = this.head;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
        delNode.next = null; 
    }

    deleteNode(pos) {
        if (pos === 1) {
            this.deleteAtHead();
            return;
        }
        let temp = this.head;
        let count = 1;
        while (temp !== null && count !== pos) {
            temp = temp.next;
            count++;
        }
        if (temp === null) return;
        if (temp.prev !== null) {
            temp.prev.next = temp.next;
        }
        if (temp.next !== null) {
            temp.next.prev = temp.prev;
        }
        temp.next = null; 
        temp.prev = null;
    }

    displayLinkedList() {
        let temp = this.head;
        let result = '';
        while (temp !== null) {
            result += temp.data + ' ';
            temp = temp.next;
        }
        console.log(result.trim());
    }
}


const dll = new DoublyLinkedList();
dll.insertAtHead(1);
dll.insertAtHead(2);
dll.insertAtHead(3);
dll.displayLinkedList();
dll.deleteNode(2);
dll.displayLinkedList();
dll.insertAtTail(4);
dll.displayLinkedList(); 
