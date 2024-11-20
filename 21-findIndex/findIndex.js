/* The findIndex() method is used to find the index of the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, it returns -1. */

const numbers = [12, 10, 35, 7, 55, 120, 250]
const isLarger = (item) => item > 50;
const isLargerIndex = numbers.findIndex(isLarger)
console.log('First larger number than 50 is ',numbers[isLargerIndex] , 'with index of ', isLargerIndex )

// If no element satisfies the testing function, findIndex() returns -1:

const isLarger2 = (item) => item < 5; 
const isLargerIndex2 = numbers.findIndex(isLarger2)
console.log(isLargerIndex2)
