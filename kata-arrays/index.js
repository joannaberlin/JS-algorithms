/*
https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/

function alternate(n, firstValue, secondValue) {
	let result = [];

	if (n === 0) [];
	for (let i = 0; i < n; i++) {
		result.push(firstValue);
		result.push(secondValue);
	}
	return result.slice(0, n);
}

// better solution
// function alternate(n, firstValue, secondValue) {
// 	const array = [];
// 	for (let i = 0; i < n; i++) {
// 		array.push(i % 2 === 0 ? firstValue : secondValue);
// 	}
// 	return array;
// }

alternate(5, true, false);
//[true, false, true, false, true];
alternate(0, 'lemons', 'apples');
//[]
