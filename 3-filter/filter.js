console.log("Bismi Allah");

/**-----Filter method return a new array based on the filter in the call back function --------- */
/**-----Filter call back is like a test for each element and REMOVE all the elements for which the callback function returns a falsy value*/
/**---------example 1-------------- */
console.log("---------example 1-------------");
const numbers = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const even = numbers.filter((number) => {
	return number % 2 === 0;
});
console.log(even);

/**---------example 2-------------- */
console.log("---------example 2-------------");
const people = [
	{ name: "Mohamed", age: 35 },
	{ name: "Mohamed", age: 13 },
	{ name: "Samy", age: 7 },
	{ name: "Maya", age: 3 },
];

const kids = people.filter((item) => {
	return item.age < 18;
});
console.log(kids);

/**---------example 3-------------- */
/**---indexOf return the first occurrence */
console.log("---------example 3 remove duplicate-------------");

const numbers1 = [2, 1, 5, 4, 3, 2, 4, 5, 6, 7, 5, 9, 8, 4];
const num = numbers1.filter((value, index, arr) => {
	return arr.indexOf(value) === index;
});
console.log(num);
