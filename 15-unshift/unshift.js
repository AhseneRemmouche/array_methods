/* The unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array. This method changes the length of the array. */
// example 1

const fruits = ['banana', 'orange']
console.log('Fruits before unshift: ', fruits)
const fruitsLength = fruits.unshift('apple')
console.log('Fruits after unshift: ', fruits)
console.log('unshift return the new length of the array: ', fruitsLength)

/* unshift() adds the element ‘apple’ to the beginning of the fruits array. The fruits array is now [‘apple’, ‘banana’, ‘orange’]. */

// You can also add multiple elements at once:

const fruits2 = ['banana', 'orange']
console.log('Fruits before unshift: ', fruits2)
const fruitsLength2 = fruits2.unshift('apple', 'pineapple')
console.log('Fruits after unshift: ', fruits2)
console.log('unshift return the new length of the array: ', fruitsLength2)

// ‘apple’ and ‘pineapple’ are added to the beginning of the fruits array.