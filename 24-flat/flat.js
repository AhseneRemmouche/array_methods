/* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. */

const nestedArray = [1, 2, 3,[4, 5, 6, 7]];
const flatArray = nestedArray.flat();
console.log(flatArray);

// flat() flattens the nestedArray into a new array, flatArray

/* By default, flat() only flattens one level deep. If you have a more deeply nested array, you can specify the depth as an argument: */

let deeplyNestedArray = [1, [2, [3, [4]]]];
let flatArray2 = deeplyNestedArray.flat(3); // flatArray2 is [1, 2, 3, 4]
console.log(flatArray2)

//flat() flattens the deeplyNestedArray into a new array, flatArray, up to 3 levels deep.