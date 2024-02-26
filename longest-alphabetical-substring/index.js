/*
https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

function longest(str) {
	if (str.length === 1) return str;
	let substr = str[0];
	let longestSubstring = '';

	for (let i = 1; i < str.length; i++) {
		if (str[i] >= str[i - 1]) {
			substr += str[i];
		} else {
			if (substr.length > longestSubstring.length) {
				longestSubstring = substr;
			}
			substr = str[i];
		}
	}
	if (substr.length > longestSubstring.length) {
		longestSubstring = substr;
	}

	return longestSubstring;
}

console.log(longest('z'));
//should return 'z'
console.log(longest('asd'));
//should return 'as'
console.log(longest('abcdeapbcdef'));
//should return 'abcde'
console.log(longest('asdfaaaabbbbcttavvfffffdf'));
//should return 'aaaabbbbctt'
