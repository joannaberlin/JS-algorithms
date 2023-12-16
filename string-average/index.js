/*
https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript

You are given a string of numbers between 0-9. Find the average of these numbers and return
it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
	if (str === '') return 'n/a';
	const nums = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};
	const arr = str.split(' ');
	const resultNums = arr.map((item) => nums[item]);
	for (item of resultNums) {
		if (item < 0 || item > 9 || item === undefined) {
			return 'n/a';
		}
	}
	const avarage = Math.floor(
		resultNums.reduce((acc, curVal) => acc + curVal, 0) / resultNums.length
	);
	for (const [key, value] of Object.entries(nums)) {
		if (value === avarage) {
			return key;
		}
	}
}

console.log(averageString('zero nine five two'));
//"four"
console.log(averageString('one two three four five'));
//"three"
