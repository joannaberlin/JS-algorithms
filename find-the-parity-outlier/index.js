/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N. Write a method that takes
the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

function findOutlier(integers) {
	let count = 0;
	for (let i = 0; i <= 2; i++) {
		if (integers[i] % 2 === 0) {
			count++;
		}
	}
	const outlier = integers.filter((item) =>
		count <= 1 ? item % 2 === 0 : item % 2 !== 0
	);
	return parseInt(outlier.join());
}

//Simple solution with filter method
// function findOutlier(int) {
// 	var even = int.filter((a) => a % 2 == 0);
// 	var odd = int.filter((a) => a % 2 !== 0);
// 	return even.length == 1 ? even[0] : odd[0];
// }

findOutlier([0, 1, 2]);
//1
findOutlier([2, 6, 8, 10, 3]);
//3
findOutlier([1, 1, 0, 1, 1]);
//0
