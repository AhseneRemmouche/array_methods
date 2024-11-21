/* The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. */

let numbers = [1, 2, 3, 4, 5];
let isEven = (element) => element % 2 === 0;
let result = numbers.some(isEven); // result is true

/* some() uses the isEven function to check if there’s at least one element in the numbers array that is even. Since the number 2 is even, some() returns true. */

// If no elements pass the test, some() returns false:

let numbers2 = [1, 3, 5, 7, 9];
let isEven2 = (element) => element % 2 === 0;
let result2 = numbers2.some(isEven); // result is false

/* some() uses the isEven function to check if there’s at least one element in the numbers array that is even. Since no elements are even, some() returns false. */