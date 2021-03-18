const { defaultToString } = require("../utils");

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

module.exports = class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  //检测一个键是否存在于字典中
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  //在字典和valuePair类中设置键和值
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  //从字典中移除一个值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  //从字典中检索一个值
  get(key) {
    // const valuePair = this.table[this.toStrFn(key)];
    // return valuePair == null ? undefined : valuePair.value;
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }
    return undefined;
  }
  //返回所有的valuePairs对象
  keyValues() {
    return Object.values(this.table);
  }
  //返回所有键名
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
}