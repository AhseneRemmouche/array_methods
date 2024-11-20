/* The indexOf() method is used to search for a specific element in an array and returns its first index. If the element is not found, it returns -1. */

const fruits =["banana", "pear", "fig", "apple", "orange"];
let figIndex = fruits.indexOf('fig');
console.log(figIndex)

/* indexOf() searches the fruits array for ‘fig’ and returns its index, which is 2. If the element is not in the array, indexOf() returns -1: */

let pineappleIndex = fruits.indexOf('pineapple')
console.log(pineappleIndex)