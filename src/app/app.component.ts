import { Component } from "@angular/core";

export class BinaryTreeNode {
  data: any;
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;
  constructor(value: any) {
    this.data = value;
  }
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Binary Tree";
  myBinaryTree: BinaryTreeNode;

  preOrderData = [];
  inOrderData = [];
  postOrderData = [];

  constructor() {
    this.myBinaryTree = new BinaryTreeNode({ text: "root", value: 1 });

    let left: BinaryTreeNode = {
      data: { text: "Sub-1", value: 2 }
    };
    let right = new BinaryTreeNode({ text: "Sub-2", value: 3 });

    left.left = new BinaryTreeNode({ text: "Sub-1-1", value: 4 });
    left.right = new BinaryTreeNode({ text: "Sub-1-2", value: 5 });

    this.myBinaryTree.left = left;
    this.myBinaryTree.right = right;

    this.printPreorder({...this.myBinaryTree});
    this.printInorder(this.myBinaryTree);

  }

  printPreorder(node: BinaryTreeNode) {
    if (node == null) return;

    /* first print data of node */
    console.log(node.data.value + " ");
    this.preOrderData.push(node.data.value);
    /* then recur on left sutree */
    this.printPreorder(node.left);

    /* now recur on right subtree */
    this.printPreorder(node.right);
  }

  printInorder(node: BinaryTreeNode) {
    if (node == null) return;

    /* first recur on left child */
    this.printInorder(node.left);

    /* then print the data of node */
    console.log(node.data.value + " ");
    this.inOrderData.push(node.data.value);

    /* now recur on right child */
    this.printInorder(node.right);
  }
}
