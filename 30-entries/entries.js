/* The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. */

const letters = ['a', 'b', 'c', 'd' ];
const obj = letters.entries();

for([index, value] of obj){
    console.log(`index: ${index} | value: ${value}`)
}

/* entries() creates a new Array Iterator object for the array. The for-of loop then iterates over each entry in the iterator, logging each index and value to the console.

Please note that the entries are key/value pairs in the form of [index, element]. If you need to iterate over the indices or elements in the array separately, consider using keys(), values(), or a for-in loop with the array directly. */