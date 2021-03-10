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
      if (index === 0) {//第一项时
        if (this.head == null) {//链表空时
          this.head = node;
          this.tail = node;
        } else {//链表非空时
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {//最后一项时
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        node.prev = previous;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.getElementAt(index);
      if (index === 0) {//第一项
        this.head = current.next;
        if (this.count === 1) {//只有一项
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {//最后一项
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
    }
  }
}