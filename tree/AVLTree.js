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

  //插入节点
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    //像在BST树中一样插入节点
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    //如果需要 将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        node = this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        node = this.rotationRL(node);
      }
    }
    return node;
  }

  //移除节点
  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (ndoe == null) {
      return node;//null不需要平衡
    }
    //检查树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      //如果左侧子树移除节点不平衡了 要计算左侧子树的平衡因子
      const balanceFacorLeft = this.getBalanceFactor(node.left);
      if (balanceFacorLeft === BalanceFactor.BALANCED || balanceFacorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        //如果左侧子树向左不平衡 进行LL旋转
        return this.rotationLL(node);
      }
      if (balanceFacorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        //如果左侧子树向右不平衡 进行LR旋转
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      //如果右侧子树移除节点不平衡了 要计算右侧子树的平衡因子
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight === BalanceFactor.UNBALANCED_RIGHT) {
        //如果右侧子树向右不平衡 进行RR旋转
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        //如果右侧子树向左不平衡 进行RL旋转
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}