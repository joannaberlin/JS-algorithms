/*
https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

Create a function isAlt() that accepts a string as an argument and validates whether the vowels
(a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

function isAlt(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let prevType = vowels.includes(word[0]) ? 'vowel' : 'consonant';

	for (let i = 1; i < word.length; i++) {
		const currentType = vowels.includes(word[i]) ? 'vowel' : 'consonant';
		if (currentType === prevType) {
			return false;
		}
		prevType = currentType;
	}
	return true;
}

console.log(isAlt('amazon'));
//true
console.log(isAlt('apple'));
//false
console.log(isAlt('banana'));
//true
