/*
 * @Author: your name
 * @Date: 2020-09-02 20:39:47
 * @LastEditTime: 2020-09-03 19:31:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithmJs/stack/stack.js
 */
//不安全的  不能确保属性私有
module.exports = class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() { return this.count === 0; }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() { this.items = {}; this.count = 0; }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

//使用WeakMap确保属性私有
const items = new WeakMap();
class Stack1 {
  constructor() {
    items.set(this, []);
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  //....
}
