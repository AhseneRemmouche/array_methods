/* The join() method is used to join all elements of an array into a string. The elements will be separated by a specified separator. The default separator is a comma (,). */

const fruits = ["apple", "banana", "orange", "fig"];
let strFruits = fruits.join();
console.log(strFruits);

//join() combines all elements of the fruits array into a string, with each element separated by a comma.

//You can specify a different separator:
let strFruits2 = fruits.join('-');
console.log(strFruits2);

//join() combines all elements of the fruits array into a string, with each element separated by ’ - '.