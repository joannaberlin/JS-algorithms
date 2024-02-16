/*
https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile.
Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains
all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of
the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array
should be returned.
*/

function group(arr) {
	const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
	const singles = arr.filter((item, index) => arr.indexOf(item) === index);
	const result = singles.map((item) => [item]);

	for (let item of duplicates) {
		for (let arr of result) {
			if (arr.includes(item)) {
				arr.push(item);
			}
		}
	}
	return result;
}

console.log(group([3, 2, 6, 2, 1, 3]));
//[[3, 3], [2, 2], [6], [1]]
console.log(group([19, 17, 11, 17, 10, 17, 15, 13, 10, 11]));
//[[19], [17, 17, 17], [11, 11], [10, 10], [15], [13]]
