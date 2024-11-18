console.log("Bismi Allah");
/* The array sort method sorts the elements of an array by manipulating the array, the default sort order is ascending it will convert the elements from the array to string and then it will compare their sequences of utf-16 code unit values  */

// Example 1
const numbers = [74, 18, 10, 5, 84, 24, 105];

numbers.sort(numbersSort);

console.log(numbers);

function numbersSort(a, b) {
	/* 1. < 0 ... a comes first 
       2. = 0 ... nothing will be changed
       3. > 0 ... b comes first
    */
	return a - b;
}
