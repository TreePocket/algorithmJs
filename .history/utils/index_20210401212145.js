

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

module.exports = CommonFun = {
  defaultEquals: function defaultEquals(a, b) { return a === b; },
  defaultToString: function defaultToString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  },
  Compare: Compare,
  defaultCompare: function (a, b) {
    // console.log(this.Compare);
    if (a === b) {
      return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  },
}