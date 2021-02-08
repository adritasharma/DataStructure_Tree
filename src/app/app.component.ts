import { Component } from '@angular/core';

export class BinaryTreeNode {
  data:any
  left?: BinaryTreeNode
  right?:BinaryTreeNode
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Binary Tree';
  myBinaryTree: BinaryTreeNode = new BinaryTreeNode;

  constructor(){
    let left:BinaryTreeNode ={
      data:1
    }
    let right:BinaryTreeNode ={
      data:2
    }
    this.myBinaryTree.left = left;
     this.myBinaryTree.right = right
  }

}
