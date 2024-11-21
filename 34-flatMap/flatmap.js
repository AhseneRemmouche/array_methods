/* The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It’s essentially equivalent to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient. */

let arr = [1, 2, 3, 4];
let newArr = arr.flatMap(x => [x * 2]); // newArr is [2, 4, 6, 8]
console.log(newArr)
/* The map callback function multiplies each element by 2 and wraps the result in an array ([x * 2]).
Since flatMap only flattens the array at a depth of 1, it doesn't flatten nested arrays */

/* If you want to flatten the array and double all the numbers (including those in nested arrays), you can use flat() to fully flatten the array first and then map over it: */

let arr1 = [1, 2, 3, 4, [5, 6]];
let newArr1 = arr1.flat().map(x => x * 2);
console.log(newArr1); // [2, 4, 6, 8, 10, 12]

//Alternatively, if you want to use flatMap, you need to ensure the callback handles nested arrays:

let arr2 = [1, 2, 3, 4, [5, 6]];
let newArr2 = arr2.flatMap(x => (Array.isArray(x) ? x.map(y => y * 2) : [x * 2]));
console.log(newArr2); // [2, 4, 6, 8, 10, 12]


/* flatMap() first maps each element in the array to an array containing its double (i.e., [x * 2]), and then flattens the result (i.e., [[2], [4], [6], [8]]) into a new array. */

//You can also use flatMap() to interleave different data:

let arr3 = ["it's Sunny in", "", "California"];
let newArr3 = arr3.flatMap(x => x.split(' ')); // newArr is ["it's", "Sunny", "in", "", "California"]
console.log(newArr3)

/* flatMap() first maps each string in the array to an array of words (i.e., x.split(' ')), and then flattens the result into a new array. */