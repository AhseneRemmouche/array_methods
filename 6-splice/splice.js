console.log("Bismi Allah");

/**--splice change the array by removing or replacing exesting elemrnt from the array it gets starting index, count (means how may elements you want to remove) and it can gets optionnaly new elements who will be placed inside the array then it will change the array and return an array of the deleted elements */

/* The splice() method changes the contents of an array by removing, replacing, or adding elements. It modifies the original array and returns an array containing the deleted elements, if any. */

/**----------------example 1 remove 3 numbers from index 2 and replace them with 10 and 11 -------------------- */
console.log("------------------ example 1 -----------------");
const numbers = [1, 2, 3, 4, 5, 6];
const deleted = numbers.splice(2, 3, 10, 11);
console.log(numbers);
console.log(deleted);

/**--- example 2 if we put 0 as second parameter we can add number to the array but it will change the array and it is not the best way to do it-----*/
console.log("------------example 2--------------- ");
const numbers1 = [1, 2, 3, 4, 5, 6];
const deleted2 = numbers1.splice(2, 0, 11, 12, 13);
console.log(numbers1); //[1, 2, 11, 12, 13, 3, 4,  5,  6]
console.log(deleted2); //[]
