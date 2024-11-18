/* The push() method is used to add one or more elements to the end of an array. It modifies the original array, returns the new length of the array, and is a destructive method (method that modifies the original object or array ). */
// example 1
const fruits = ['banana', 'apple', 'orange'];
const fruitLength = fruits.push('pear');
console.log('fruits: ',fruits,'fruits length: ',fruitLength  );
// 'pear' is added to the end of the fruits array.

//example 2
//You can also add multiple elements at once:
const fruits2 = ['peach', 'pineapple'];
fruits2.push('banana', 'apple')
console.log('fruits2: ',fruits2)