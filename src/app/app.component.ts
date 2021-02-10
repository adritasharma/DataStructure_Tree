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

  constructor() {
    this.myBinaryTree = new BinaryTreeNode({ text: "root", value: 1 });

    let left: BinaryTreeNode = {
      data: { text: "Sub-1", value: 2 }
    };
    let right = new BinaryTreeNode({ text: "Sub-2", value: 3 });

    left.left = new BinaryTreeNode({ text: "Sub-1-1", value: 1 });
    left.right = new BinaryTreeNode({ text: "Sub-1-2", value: 5 });

    this.myBinaryTree.left = left;
    this.myBinaryTree.right = right;
  }
}
