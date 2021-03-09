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
}