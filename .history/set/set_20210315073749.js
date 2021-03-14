module.export = class Set {
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

  }
  //判断元素是否在集合中
  has(element) {
    // return element in items;
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  //移除集合中的所有元素
  clear() {

  }
  //返回集合所包含元素的数量
  size() {

  }
  //返回一个包含集合中所有值(元素)的数组
  values() {

  }
}