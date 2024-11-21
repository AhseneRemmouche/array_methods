/* The values() method returns a new Array Iterator object that contains the values for each index in the array. */

let array = ['a', 'b', 'c'];
let iterator = array.values();

for (let value of iterator) {
  console.log(value); // logs 'a', then 'b', then 'c'
}
/* values() creates a new Array Iterator object for the array. The for-of loop then iterates over each value in the iterator, logging each value to the console.
 */
/* Please note that the values are the elements of the array, not the indices. If you need to iterate over the indices in the array, consider using keys(), or a for-in loop with the array directly. */