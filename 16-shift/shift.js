/* The shift() method is used to remove the first element from an array and return that element. This method changes the length of the array. */

const fruits = ['apple', 'banana', 'orange'];
console.log('Fruits before shift: ', fruits)
const firstFruit = fruits.shift()
console.log('First fruit: ', firstFruit);
console.log('Fruits after shift: ', fruits)

/* shift() removes the first element ‘apple’ from the fruits array and returns it, storing it in the firstFruit variable. The fruits array is now [‘banana’, ‘orange’]. */