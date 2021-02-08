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
    this.myBinaryTree = new BinaryTreeNode("root");

    let left = {
      data: 1
    };
    let right = new BinaryTreeNode(2);
    
    this.myBinaryTree.left = left;
    this.myBinaryTree.right = right;
  }
}
