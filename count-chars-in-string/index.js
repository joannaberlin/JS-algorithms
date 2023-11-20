/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

The main idea is to count all the occurring characters in a string. If you have
a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
	const arr = string.split('');
	let result = {};
	arr.forEach((char) => {
		if (result[char]) {
			result[char] += 1;
		} else {
			result[char] = 1;
		}
	});
	return result;
}

//Same logic with use of ternary operator
// function count(string) {
// 	var count = {};
// 	string.split('').forEach((s) => {
// 		count[s] ? count[s]++ : (count[s] = 1);
// 	});
// 	return count;
// }

console.log(count('aba'));
//{'a': 2, 'b': 1};
