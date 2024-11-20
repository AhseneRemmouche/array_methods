console.log('Bismi Allah')
/* The map() method creates a new array with the results of calling a provided function on every element in the calling array. */

let numbers1 = [1, 4, 9, 16];
let roots = numbers1.map(Math.sqrt); // roots is [1, 2, 3, 4]
console.log(roots)

/** Map methode execute a call back function on each element in the array and return a new array*/
console.log('--------example 1-------------')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const double = numbers.map((value, index, arr) => {
  return value * 2
})
console.log(double)
console.log(numbers) //numbers array stay the same

/**------------realistic example------------*/
console.log('--------example 2-------------');
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,
    },
    {
        name: 'desktop',
        price: 1500,
        count: 3,
    },
    {
        name: 'phone',
        price: 500,
        count: 7,
    },
];
productsValue = products.map(product => ({
  name: product.name,
  value:product.price * product.count
}))

console.log(productsValue)
