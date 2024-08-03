class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtTail(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    insertAtHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
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

    deleteNode(pos) {
        if (this.head === null) return;

        if (pos === 1) {
            const temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            return;
        }

        let current = this.head;
        for (let i = 1; i < pos - 1 && current !== null; i++) {
            current = current.next;
        }

        if (current === null || current.next === null) return;

        const temp = current.next;
        current.next = current.next.next;
        temp.next = null;
    }

    search(val) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === val) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}


const ll = new LinkedList();
ll.insertAtTail(1);
ll.insertAtTail(2);
ll.insertAtTail(3);
ll.insertAtHead(6);
ll.displayLinkedList(); 
ll.deleteNode(2);
ll.displayLinkedList(); 
console.log(ll.search(9));






