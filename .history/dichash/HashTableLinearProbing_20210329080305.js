const { defaultToString } = require("../utils");

const ValuePair = require("./util");
//线性探查 当想向表中某个位置添加一个新元素时，如果索引为position的位置已经被占据了，就尝试position+1的位置。如果position+1的位置也被占据了，就尝试position+2的位置，以此类推，直到在散列表中找到一个空闲的位置。
module.exports = class HashTableLinearProbing {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = position + 1;
        while (this.table[index] != null && this.table[index].key != key) {
          index++;
        }
        if (this.table[index] != null && this.table[index].key != key) {
          return this.table[index].value;
        }
        return undefined
      }
    }
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.
      }
    }
  }

  //验证删除操作是否有副作用
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
    }
  }


}