const DoublyLinkedList = require("./DoublyLinkedList")
//对于 StackLinkedList 类,我们将使用 DoublyLinkedList 来存储数据(行{1}) ,而非使用数组或 JavaScript 对象。之所以使用双向链表而不是链表,是因为对栈来说,我们会向链表尾部添加元素(行{2}) ,也会从链表尾部移除元素(行{3}) 。DoublyLinkedList 类有列表最后一个元素(tail)的引用,无须迭代整个链表的元素就能获取它。双向链表可以直接获取头尾的元素,减少过程消耗,它的时间复杂度和原始的 Stack 实现相同,为 O(1)。
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