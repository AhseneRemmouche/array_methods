/* The concat() method is used to merge two or more arrays into one. This method does not change the existing arrays, but instead returns a new array that contains all the elements from the arrays you want to combine. */

const fruits1 = ['banana', 'apple' ];
const fruits2 = ['pineapple', 'pear']

const fruits = fruits1.concat(fruits2)
console.log(fruits)

//You can also concatenate more than two arrays:

const fruits3 = ['banana', 'apple' ];
const fruits4 = ['pineapple', 'pear']
const fruits5 = ['orange', 'fig']

const allFruits = fruits3.concat(fruits4, fruits5)
console.log(allFruits)

// concat() merges the fruits3, fruits4, and fruits5 arrays into a new array allFruits.