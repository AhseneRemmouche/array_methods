/* Array.isArray() checks if fruits is an array. Since fruits is indeed an array, Array.isArray() returns true. If the passed value is not an array, Array.isArray() returns false: */

const fruits = ['fig', 'apple', 'orange'];
let result = Array.isArray(fruits);
console.log(result);

// If the passed value is not an array, Array.isArray() returns false:

const user = {name: 'Samy', age: 8};
result2 = Array.isArray(user)
console.log(result2)