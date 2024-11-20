/* The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. */

const numbers = [12, 10, 35, 7, 55, 120, 250]
const isLarger = (item) => item > 50;
const isLargerIndex = numbers.find(isLarger)
console.log('First larger number than 50 is ', isLargerIndex )

/* find() uses the isLarge function to find the first element in the numbers array that is greater than 50 and returns its value, which is 55. */

//If no element satisfies the testing function, find() returns undefined:

const isLarger2 = (item) => item < 5; 
const isLargerIndex2 = numbers.find(isLarger2)
console.log(isLargerIndex2)