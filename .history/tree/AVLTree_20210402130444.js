const { Compare, defaultCompare } = require("../utils/index.js");
const BinarySearchTree = require('./AVLTree');

module.exports = class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}