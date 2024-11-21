/* The includes() method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate. */

const fruits = ['fig', 'orange', 'banana'];
let result = fruits.includes('fig');
console.log(result); 

//includes() checks if fruits includes ‘fig’. Since ‘banana’ is indeed in the array, includes() returns true.

result = fruits.includes('apple');
console.log(result)