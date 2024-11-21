//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

let array = ['a', 'b', 'c'];
let iterator = array.keys();

for (let key of iterator) {
  console.log(key); // logs 0, then 1, then 2
}
/* keys() creates a new Array Iterator object for the array. The for-of loop then iterates over each key in the iterator, logging each key to the console. */

/* Please note that the keys are the indices of the array elements, not the elements themselves. If you need to iterate over the elements in the array, consider using forEach(), map(), or a for-of loop with the array directly. */