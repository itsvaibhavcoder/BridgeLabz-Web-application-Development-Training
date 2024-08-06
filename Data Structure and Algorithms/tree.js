//A tree is a hierarchical data structure consisting of nodes, where each node has a value and a list of references to its child nodes. The topmost node is called the root, and each node (except the root) has exactly one parent. Nodes with no children are called leaves.

//Binary Tree Implimentation
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this.insertRec(this.root, val);
    }

    insertRec(node, val) {
        if (node === null) {
            return new TreeNode(val);
        }

        if (val < node.val) {
            node.left = this.insertRec(node.left, val);
        } else if (val > node.val) {
            node.right = this.insertRec(node.right, val);
        }

        return node;
    }

    inorder() {
        this.inorderRec(this.root);
    }

    inorderRec(node) {
        if (node !== null) {
            this.inorderRec(node.left);
            process.stdout.write(node.val + " ");
            this.inorderRec(node.right);
        }
    }

    preorder() {
        this.preorderRec(this.root);
    }

    preorderRec(node) {
        if (node !== null) {
            process.stdout.write(node.val + " ");
            this.preorderRec(node.left);
            this.preorderRec(node.right);
        }
    }

    postorder() {
        this.postorderRec(this.root);
    }

    postorderRec(node) {
        if (node !== null) {
            this.postorderRec(node.left);
            this.postorderRec(node.right);
            process.stdout.write(node.val + " ");
        }
    }

    levelOrder() {
        this.levelOrderRec(this.root);
    }

    levelOrderRec(root) {
        if (root === null) return;

        let queue = [];
        queue.push(root);

        while (queue.length > 0) {
            let node = queue.shift();
            process.stdout.write(node.val + " ");
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
}

//Usage
let tree = new BinaryTree();

tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

console.log("Inorder traversal:");
tree.inorder();

console.log("Preorder traversal:");
tree.preorder();

console.log("Postorder traversal:");
tree.postorder();

console.log("Level order traversal:");
tree.levelOrder();
