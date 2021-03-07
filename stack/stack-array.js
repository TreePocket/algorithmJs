/*
 * @Author: your name
 * @Date: 2020-09-02 20:13:17
 * @LastEditTime: 2020-09-02 20:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithmJs/stack/stack-array.js
 */
class Stack {
  constructor() {
    this.items = [];
  }

  //添加一个(或几个)新元素到栈顶
  push(element) {
    this.items.push(element);
  }

  //移除栈顶元素，并返回被移除的元素
  pop() {
    return this.items.pop();
  }

  //返回栈顶的元素，不对栈进行任何修改
  peek() {
    return this.items[this.items.length - 1];
  }

  //判断栈空，没有元素返回true 否则返回false
  isEmpty() {
    return this.items.length === 0;
  }

  //移除栈里的所有元素
  clear() {
    this.items = [];
  }

  //返回栈里元素的个数
  size() {
    return this.items.length;
  }
}

let stack = new Stack();
stack.push(123);
console.log(stack.peek());