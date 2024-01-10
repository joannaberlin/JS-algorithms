/*
https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
	if (
		arr === null ||
		arr === undefined ||
		typeof arr === 'number' ||
		typeof arr === 'string'
	)
		return false;
	if (arr.length === 0) return true;
	return arr.filter((item) => item !== parseInt(item)).length === 0;
}

//another solutions
// function isIntArray(arr) {
// 	return Array.isArray(arr) && arr.every((x) => Math.floor(x) === x);
// }
// const isIntArray = (arr) => !!arr && arr.every(Number.isInteger);

console.log(isIntArray([]));
//true
console.log(isIntArray([1, 2, 3, 4]));
//true
console.log(isIntArray([1, 2, 3, NaN]));
//false
