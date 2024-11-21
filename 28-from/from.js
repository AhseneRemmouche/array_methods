/* The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. */

let string = 'Mohamed';
let array = Array.from(string);
console.log(array); // ['M', 'o', 'h','a', 'm', 'e','d']

//Array.from() creates a new array from the string ‘hello’. Each character in the string becomes an element in the new array.

//You can also use Array.from() with a map function:

let numbers = [1, 2, 3, 4];
let doubles = Array.from(numbers, x => x * 2); // doubles is [2, 4, 6, 8]
console.log(doubles);

/* Array.from() creates a new array from the numbers array. The map function is applied to each element in the numbers array, so each element in the new array is twice the corresponding element in the original array. */