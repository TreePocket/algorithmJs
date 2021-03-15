module.exports = class Set {
  constructor() {
    this.items = {}
  }

  //向集合添加一个新元素
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  //从集合移除一个元素
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  //判断元素是否在集合中
  has(element) {
    // return element in items;
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  //移除集合中的所有元素
  clear() {
    this.items = {};
  }

  //返回集合所包含元素的数量
  size() {
    //return Object.keys(this.items).length; //IE9以上等现代浏览器运行
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  //返回一个包含集合中所有值(元素)的数组
  values() {
    //return Object.values(this.items); //IE9以上等现代浏览器运行
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }

  //并集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  //交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.size() > otherSet.size() ? otherSet.values() : this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }


}