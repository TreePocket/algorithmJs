const { defaultToString } = require("../utils");
//分离链接

module.exports = class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}