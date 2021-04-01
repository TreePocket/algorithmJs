const { Compare, defaultCompare } = require("../utils/index.js");
const Node = require("./Node");
//二叉搜索树
module.exports = class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;//用来比较节点值
    this.root = null; //Node类型的根节点
  }

  //向树中插入已给新的键
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  //将节点添加到根节点以外的位置
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  //在树中查找一个键
  search(key) {

  }
  //通过中序遍历方式遍历所有节点 是一种以最小到最大的顺序访问所有的节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }



  //通过先序遍历方式遍历所有节点
  preOrderTraverse() {

  }
  //通过后序遍历方式遍历所有节点
  postOrderTraverse() {

  }
  //min() 返回树中最小的值
  min() {

  }
  //max() 返回树中最大的值
  max() {

  }
  //从树中移除某个键
  remove(key) {

  }
}