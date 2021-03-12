const DoublyLinkedList = require("./DoublyLinkedList")

//栈链表
module.exports = class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.items.removeAt(this.size() - 1);
    }
  }
}