/*
https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript

We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be.
The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it
into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid
solution for each input to your function!

Example:
splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Inputs
The input to your function will always be valid for this kata.
*/

var splitInteger = function (num, parts) {
	let result = [];
	let sum = 0;
	const number = Math.floor(num / parts);
	if (number === num) {
		result.push(number);
		return result;
	} else {
		for (let i = 0; i < parts; i++) {
			result.push(number);
		}
		result.forEach((num) => (sum += num));
		if (sum === num) {
			return result;
		}
		for (let i = 0; i < parts; i++) {
			result[i]++;
			if (result.reduce((a, b) => a + b, 0) === num) {
				return result;
			}
		}
	}
};

splitInteger(10, 1);
//[10]
splitInteger(2, 2);
//[1,1]
splitInteger(20, 5);
//[4,4,4,4,4]
splitInteger(20, 6);
//[3,3,3,3,4,4]
