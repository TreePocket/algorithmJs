//链表
const CommonFun = require("../utils/index");
const defaultEquals = CommonFun.defaultEquals;
const Node = require("./modules/index.js");

module.exports = class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  //向链表尾部添加元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {//链表为空
      this.head = node;
    } else {//链表非空
      current = this.head;
      //遍历链表找到最后一项
      while (current.next != null) {
        current = current.next;
      }
      //将element加入到链表最后
      current.next = node;
    }
    this.count++;
  }

  //根据位置从链表中移除元素
  removeAt(index) {
    //检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;

      //移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        previous = this.getElementAt(index - 1);
        // for (let i = 0; i < index; i++) {
        //   previous = current;
        //   current = current.next;
        // }
        current = previous.next;
        previous.next = current.next;

      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  //找到索引index的元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  //任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  //返回一个元素在链表中的位置
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  //根据元素值在链表中移除元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    } else {
      let objStr = `${this.head.element}`;
      let current = this.head.next;
      for (let i = 1; i < this.count && current != null; i++) {
        objStr = `${objStr},${current.element}`;
        current = current.next;
      }
      return objStr;
    }
  }


}