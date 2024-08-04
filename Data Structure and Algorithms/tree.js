//A tree is a hierarchical data structure consisting of nodes, where each node has a value and a list of references to its child nodes. The topmost node is called the root, and each node (except the root) has exactly one parent. Nodes with no children are called leaves.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    
    addChild(childNode) {
      this.children.push(childNode);
    }
}

class Tree {
    constructor(rootValue) {
      this.root = new TreeNode(rootValue);
    }

    traverseDFS(node = this.root){
        console.log(node.value);
        for(let child of node.children){
            this.traverseDFS(child);
        }
    }

    traverseBFS(){
        let queue = [this.root];
        while(queue.length>0){
            let node = queue.shift();
            console.log(node.value);
            for(let child of node.children)
            {
                queue.push(child);
            }
        }
    }
}


// Create a new tree
let tree = new Tree("root");

// Add children to the root
let child1 = new TreeNode("child1");
let child2 = new TreeNode("child2");
tree.root.addChild(child1);
tree.root.addChild(child2);

// Add grandchildren
let grandchild1 = new TreeNode("grandchild1");
let grandchild2 = new TreeNode("grandchild2");
child1.addChild(grandchild1);
child1.addChild(grandchild2);

// Traverse the tree (DFS)
console.log("DFS Traversal:");
tree.traverseDFS();

// Traverse the tree (BFS)
console.log("BFS Traversal:");
tree.traverseBFS();
