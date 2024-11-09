console.log('Bismi Allah');

/**---Reduce method execute a call back function on each element of the array and return a single value */

/*-----------------example 1 accumulate all the numbers of the array ----------------*/
console.log('-------------- example 1 --------------');
const numbers = [11, 1, 2, 3, 4, 5, 6];
const total = numbers.reduce(sum, 0);

function sum(accumulator, value, index, array) {
    return accumulator + value;
}
console.log(total);

/**---------------example 2 return the biggest value in the array----------- */
console.log('------------------ example 2 -------------------');
const max = numbers.reduce(maxNumberFunc, -Infinity); //-Infinity is the smallest value

function maxNumberFunc(accumulator, value, index, array) {
    if (accumulator > value) {
        return accumulator;
    }
    return value;
}
console.log(max);

/**-----------example 3 calculate the total amount of the store */
console.log('------------ example 3 -------------');

const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3,
    },
    {
        product: 'desktop',
        value: 1500,
        count: 2,
    },
    ,
    {
        product: 'phone',
        value: 500,
        count: 2,
    },
];

const total1 = store.reduce((accumulator, item, index, arr) => {
  return (accumulator + (item.value * item.count))
}, 0)
console.log(total1)
