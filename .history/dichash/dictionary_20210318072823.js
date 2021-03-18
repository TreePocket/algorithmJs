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

}