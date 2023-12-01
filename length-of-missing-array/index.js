/*
https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

function getLengthOfMissingArray(arrayOfArrays) {
	if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;
	for (let arr of arrayOfArrays) {
		if (arr === null || arr.length === 0) return 0;
	}
	const numbers = arrayOfArrays.map((arr) => arr.length);
	const sortedNumbers = numbers.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < sortedNumbers.length + 1; i++) {
		if (sortedNumbers[i] + 2 === sortedNumbers[i + 1]) {
			result.push(sortedNumbers[i] + 1);
		}
	}
	return parseInt(result.join());
}
console.log(
	getLengthOfMissingArray([
		[2, 1, 4, 0],
		[1, 4, 1, 1, 4, 2, 1],
		[1, 0, 2, 4, 2],
		[4, 4, 0, 2, 1, 1],
		[1, 1, 4, 0, 1, 1, 3, 0],
		[0, 1, 4, 0, 3, 0, 2, 4, 2, 4],
		[4, 2, 3, 3, 0, 0, 2, 0, 4, 1, 2, 1, 3],
		[4, 1, 2, 0, 2, 2, 3, 3, 2, 2, 4, 3],
		[2, 2, 3, 0, 3, 1, 1, 2, 1, 0, 4],
	])
);

console.log(
	getLengthOfMissingArray([
		[2, 1],
		[],
		[1, 0, 2, 3],
		[3, 3, 3],
		[0, 0, 1, 4, 2],
		[0, 2, 4, 3, 1, 3, 3],
		[0, 0, 2, 1, 2, 1],
	])
);

console.log(
	getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
//3
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
//2
console.log(getLengthOfMissingArray([]));
//0
console.log(
	getLengthOfMissingArray([
		['a', 'a', 'a'],
		['a', 'a'],
		['a', 'a', 'a', 'a'],
		['a'],
		['a', 'a', 'a', 'a', 'a', 'a'],
	])
);
//5
console.log(
	getLengthOfMissingArray([
		[0, 4],
		[0, 2, 0],
		[2, 3, 0, 4, 2],
		[0, 1, 3, 3, 0, 1],
		[1, 1, 3, 0, 3, 3, 4],
		[3, 1, 3, 4, 3, 0, 4, 2],
	])
);
//4
console.log(
	getLengthOfMissingArray(
		[],
		[1],
		[3, 2, 3, 0, 2, 3, 0],
		[2, 0],
		[2, 4, 3],
		[1, 3, 4, 0],
		[2, 4, 2, 2, 2],
		[3, 3, 2, 1, 3, 2, 1, 4, 0],
		[1, 3, 4, 2, 3, 4, 3, 3],
		[3, 2, 4, 1, 4, 0, 2, 0, 0, 0]
	)
);
