/*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls
and return a list of the sums of its parts as defined above.

Notes
Take a look at performance: some lists have thousands of elements.
Please ask before translating.
*/

function partsSums(ls) {
	let resultSums = [];
	if (ls.length === 0) return [0];
	let sum = ls.reduce((acc, currVal) => acc + currVal, 0);
	for (let i = 0; i < ls.length; i++) {
		if (i === 0) {
			resultSums.push(sum);
		}
		sum = sum - ls[i];
		resultSums.push(sum);
	}
	return resultSums;
}

//less code solution
// function partsSums(ls) {
//     ls.unshift(0);
//     let sum = ls.reduce((p, c) => p + c, 0);
//     return ls.map(v => sum = sum - v);
// }

console.log(partsSums([0, 1, 3, 6, 10]));
//[20, 20, 19, 16, 10, 0]
console.log(partsSums([1, 2, 3, 4, 5, 6]));
//[21, 20, 18, 15, 11, 6, 0]
console.log(partsSums([]));
//[0]
