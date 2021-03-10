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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {//链表空时
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      }
    }
  }
}