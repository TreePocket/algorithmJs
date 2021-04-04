const { Compare, defaultCompare } = require("../utils/index.js");
const BinarySearchTree = require('./AVLTree');

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

module.exports = class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  //计算一个节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  //计算平衡因子
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  //向右的单旋转 当左侧子节点高度大于右侧子节点高度时 并且左侧子节点也是平衡或左侧较重
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  //向左的单旋转 当右侧子节点高度大于左侧子节点高度时 并且右侧子节点也是平衡或右侧较重时
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  //向右的双旋转 左侧子节点的高度大于右侧子节点的高度 并且左侧子节点右侧较重
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  //向左的双旋转 右侧子节点的高度大于左侧子节点高度 并且右侧子节点左侧较重
  rotationRL(node) {
    node.right = thiss.rotationLL(node.right);
    return this.rotationRR(node);
  }
}