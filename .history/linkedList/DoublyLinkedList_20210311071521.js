//双向链表
const { defaultEquals } = require("../utils/index.js");
const LinkedList = require("./linkedList.js");
const Node = require("./modules/index.js");

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
}