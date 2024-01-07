/*
https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

The objective is to return all pairs of integers from a given array of integers that
have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in
the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

function twosDifference(input) {
	let result = [];
	const sorted = input.sort((a, b) => a - b);
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] + 2 === sorted[i + 1]) {
			result.push([sorted[i], sorted[i + 1]]);
		}
		if (sorted[i] + 2 === sorted[i + 2]) {
			result.push([sorted[i], sorted[i + 2]]);
		}
	}
	return result;
}

//different solutions
function twosDifference(input) {
	return input
		.filter((num) => input.indexOf(num + 2) != -1)
		.sort((a, b) => a - b)
		.map((num) => [num, num + 2]);
}

function twosDifference(input) {
	input.sort((a, b) => a - b);
	var arr = [];
	for (var i = 0; i < input.length; ++i)
		if (input.indexOf(input[i] + 2) != -1) arr.push([input[i], input[i] + 2]);
	return arr;
}

console.log(twosDifference([1, 2, 3, 4]));
//[[1,3],[2,4]]
console.log(twosDifference([1, 3, 4, 6]));
//[[1,3],[4,6]]
console.log(twosDifference([4, 3, 1, 5, 6]));
//[[1, 3], [3, 5], [4, 6]]
