/*
https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency,
sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.
*/

function solve(arr) {
	const count = {};
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (count[item]) {
			count[item] += 1;
		} else {
			count[item] = 1;
		}
	}

	const sortedArr = Object.keys(count).sort((a, b) => {
		const countDiff = count[b] - count[a];
		if (countDiff === 0) {
			return a - b;
		}
		return countDiff;
	});

	const result = [];
	sortedArr.forEach((item) => {
		const frequency = count[item];
		for (let i = 0; i < frequency; i++) {
			result.push(Number(item));
		}
	});

	return result;
}
console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));
//[1,1,1,0,0,6,6,8,8,2,3,5,9]
console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
//[3,3,3,5,5,7,7,2,9]
