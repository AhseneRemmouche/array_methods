console.log('Bismi Allah')
/**forEach method execute a call back function on each element in the array and return undefined*/
/*-----Count Duplicate Letters--------*/

const letters = ['a', 'b', 'c', 'd', 'a', 'b', 'e', 'd', 'a', 'e', 'f', 'd'];
const count = {}

const num = letters.forEach((value, index, arr) => {
  if (!count[value]) {
    count[value] = 1
  } else {
    count[value]++
  }
})
console.log(count)
console.log(num)
