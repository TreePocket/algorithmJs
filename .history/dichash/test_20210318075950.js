const Dictionary = require("./dictionary");

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@123.com');
console.log(dictionary.values());