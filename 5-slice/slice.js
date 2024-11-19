console.log('Bismi Allah')

/** The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. */

/**slice takes two argument, the first is the starting index (by default it is 0) and the second is the ending index (by default it is the array length) and the ending index is not included*/

/**------------example 1 ------------- */
console.log('------------example 1 -------------');
const numbers = [1, 2, 3, 4, 5]
const numbers1 = numbers.slice(1,4) 

console.log(numbers1) //[2, 3, 4]
console.log(numbers) //[1, 2, 3, 4, 5]

/**------------example 2 slice without parameter provide a shallow copy of an array------------- */
console.log('------------example 2 -------------');
const numbers2 = [1, 2, 3, 4, 5]
const numbers3 = numbers.slice()

console.log(numbers2) //[1, 2, 3, 4, 5]
console.log(numbers3) //[1, 2, 3, 4, 5]

/**------------example 3 slice with negative value start from the end of the array------------- */
console.log('------------example 3 -------------');
const numbers4 = [1, 2, 3, 4, 5]
const numbers5 = numbers.slice(-3)

console.log(numbers4) //[1, 2, 3, 4, 5]
console.log(numbers5) //[3, 4, 5]