const LinkedList = require("./linkedList.js");
const list = new LinkedList();
list.push(15);
list.push(10);
list.removeAt(0);
console.log(list.head);