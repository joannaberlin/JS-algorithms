/*
https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave
the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function insideOut(x) {
	const words = x.split(' ');
	const reverseStr = (str) => {
		return str.split('').reverse().join('');
	};
	const result = words.map((word) => {
		if (word.length === 1 || word.length === 2) return word;
		if (word.length % 2 === 0) {
			let first = word.slice(0, word.length / 2);
			first = reverseStr(first);
			let second = word.slice(word.length / 2);
			second = reverseStr(second);
			return first + second;
		}
		if (word.length % 2 === 1) {
			let first = word.slice(0, word.length / 2);
			first = reverseStr(first);
			let second = word.slice(word.length / 2).slice(1);
			second = reverseStr(second);
			return first + word[word.length / 2 - 0.5] + second;
		}
	});
	return result.join(' ');
}

console.log(insideOut('take me to semynak'));
//'atek me to mesykan'
console.log(insideOut('what time are we climbing up the volcano'));
//'hwta item are we milcgnib up the lovcona'
