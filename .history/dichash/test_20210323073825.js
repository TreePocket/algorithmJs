const Dictionary = require("./dictionary");
const HashTable = require("./hashTable");

// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@123.com');
// console.log(dictionary);

const hash = new HashTable();
hash.put('Gandaf', 'gandalf@email.com');
hash.put('John', 'John@email.com');
hash.put('Tyrion', 'Tyrion@email.com');
console.log(hash.hashCode('Gandaf') + ' Gandalf');
console.log(hash.hashCode('John') + ' John');
console.log(hash.get("Gandaf"));