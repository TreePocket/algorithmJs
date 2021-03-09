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

  //从链表中移除元素
  removeAt(index) {
    //检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;

      //移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}