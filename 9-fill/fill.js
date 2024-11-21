/* The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. */

// Create a new array using Array object and use fill method to fillout the new array with number 7
const arr = new Array(20).fill(7);
console.log(arr)

//You can also specify a start index and an end index:

const numbers = [5, 7, 6, 9, 10];
numbers.fill(0, 2, 4);
console.log(numbers)

/* fill() changes the elements at index 2 and 3 in the numbers array to 0. The start index is inclusive, and the end index is exclusive. */