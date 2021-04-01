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

  }
  //在树中查找一个键
  search(key) {

  }
  //通过中序遍历方式遍历所有节点
  inOrderTraverse() {

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