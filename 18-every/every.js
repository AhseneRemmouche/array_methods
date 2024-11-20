/* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */

let numbers = [1, 30, 39, 29, 10, 13];
let isBelowThreshold = (currentValue) => currentValue < 40;
let result = numbers.every(isBelowThreshold); // result is true
console.log(result)

/* every() uses the isBelowThreshold function to check if every element in the numbers array is less than 40. Since all elements pass this test, every() returns true. */


//If not all elements pass the test, every() returns false:

let numbers2 = [1, 30, 39, 50, 13];
let isBelowThreshold2 = (currentValue) => currentValue < 40;
let result2 = numbers2.every(isBelowThreshold); // result is false
console.log(result2)

/* every() uses the isBelowThreshold function to check if every element in the numbers array is less than 40. Since the element 50 does not pass this test, every() returns false. */
