/*
https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

Complete the method so that it formats the words into a single comma separated value. The last
word should be separated by the word 'and' instead of a comma. The method takes in an array of
strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty
string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

function formatWords(words) {
	if (!words) return '';
	let result = [];
	const filtered = words.filter((item) => item !== '');
	const wordsForSentence = filtered.map((item, i) => {
		if (i === filtered.length - 1) {
			return 'and ' + item;
		}
		if (i === filtered.length - 2) {
			return item;
		}
		return item + ',';
	});
	if (words.length === 1 || wordsForSentence.length === 1)
		return filtered.join();
	if (wordsForSentence.length === 2) {
		result = wordsForSentence
			.map((item, i) => (i === 0 ? item.slice(0, item.length) : item))
			.join(' ');
	} else {
		result = wordsForSentence.join(' ');
	}
	return result;
}

console.log(formatWords(['', '', 'three']));
//'three'
console.log(formatWords(['one', 'two', '', '', 'three', 'four']));
//'one, two, three and four'
console.log(formatWords(['one', '', 'two']));
//'one and two'
console.log(formatWords(['one', '', '', 'two']));
//'one and two'
console.log(formatWords(['one']));
//'one'
console.log(formatWords(['one', 'two', 'three', 'four']));
//'one, two, three and four'
console.log(formatWords([]));
//''
