

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
  Compare: {
    LESS_THAN: -1,
    BIGGER_THAN: 1
  },
  defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? this.this.Compare.BIGGER_THAN;
  },
}