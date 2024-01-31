/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same
l return the first in order of appearance.

For empty string return:

["", 0]
*/

function longestRepetition(s) {
	if (s.length === 0) {
		return ['', 0];
	}

	let result = [];
	let item = {};
	const arr = s.split('');

	arr.forEach((char, i) => {
		if (char === arr[i + 1]) {
			if (item[char]) {
				item[char] += 1;
			} else {
				item[char] = 1;
			}
		} else {
			if (item[char]) {
				result.push([char, item[char] + 1]);
			} else {
				result.push([char, 1]);
			}
			item = {};
		}
	});

	const [c, l] = result.reduce(
		(max, curr) => (curr[1] > max[1] ? curr : max),
		result[0]
	);

	return [c, l];
}

// Test cases
console.log(longestRepetition('aaaabb'));
// ["a", 4]
console.log(longestRepetition('aabbc'));
// ["a", 2]
console.log(longestRepetition(''));
// ["", 0]
