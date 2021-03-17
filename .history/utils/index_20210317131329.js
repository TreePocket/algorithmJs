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
  }
}