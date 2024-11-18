console.log("Bismi Allah");
/* The array sort method sorts the elements of an array by manipulating the array (not a copy), the default sort order is ascending it will convert the elements from the array to string and then it will compare their sequences of utf-16 code unit values  */

// Example 1
/* The array elements will be converted to string and sort method will use utf-16 to sort the elements ascending (smalest to biggest) that why we need to use a function (numbersSort)in this example to sort the numbers correctly and because we have 'a - b' in the function (numbersSort) the '-' operator will convert elements to number */

const numbers = [74, 18, 10, 5, 84, 24, 105];
//The array elements will be converted to string
numbers.sort()
console.log(numbers)

//reconvert the array elements to numbers and use 'numberSort' function to sort them
numbers.sort(numbersSort);

console.log(numbers);

function numbersSort(a, b) {
    /* 1. < 0 ... a comes first 
       2. = 0 ... nothing will be changed
       3. > 0 ... b comes first
    */
    return a - b;
}

// Example 2
/* sort an array of objects */

const store = [{
    name: "laptop",
    price: 500,
    quantity: 3
},
{
    name: "iPad",
    price: 1000,
    quantity: 2
},
{
    name: "desktop",
    price: 500,
    quantity: 2
}
]
//ascending sort (smallest to biguest)
store.sort((a,b)=>{
    return a.price - b.price
})
console.log(store)

//descending sort (biguest to smallest)
store.sort((a,b)=>{
    return b.price - a.price
})
console.log(store)

