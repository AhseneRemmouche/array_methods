console.log("Bismi Allah");
/**forEach method execute a call back function on each element in the array and return undefined*/
/*-----Count Duplicate Letters--------*/

const letters = ["a", "b", "c", "d", "a", "b", "e", "d", "a", "e", "f", "d"];
const lettersCounter = {};

letters.forEach((item, index, arr) => {
	// if (!count[value]) {
	//   count[value] = 1
	// } else {
	//   count[value]++
	// }

	// code refactoring
	lettersCounter[item]
		? (lettersCounter[item] += 1)
		: (lettersCounter[item] = 1);
});
console.log(lettersCounter);
