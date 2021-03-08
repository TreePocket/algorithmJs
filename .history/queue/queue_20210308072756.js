/*
 * @Author: your name
 * @Date: 2020-09-08 07:53:39
 * @LastEditTime: 2020-09-08 08:23:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithmJs/queue/queue.js
 */
//队列
module.exports = class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //入队
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //出队
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  //返回队列第一个元素 不移除元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  //判空
  isEmpty() {
    return this.count === this.lowestCount;
  }

  //返会队列元素个数
  size() {
    return this.count - this.lowestCount;
  }

  //清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  //toString方法
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}${this.items[i]}`;
    }
    return objString;
  }
}