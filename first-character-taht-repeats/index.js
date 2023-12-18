/*
https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/javascript

Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet'
would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

function firstDup(s) {
	let duplIndexes = [];
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) !== i) {
			duplIndexes.push(s.indexOf(s[i]));
		}
	}
	const sorted = duplIndexes.sort();
	return s[sorted[0]];
}

firstDup('tweet');
//'t'
firstDup('Ode to Joy');
//' '
firstDup('bar');
//undefined
