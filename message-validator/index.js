/*
https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript

In this kata, you have an input string and you should check whether it is a valid message. To
decide that, you need to split the string by the numbers, and then compare the numbers with the
number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should
return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and
the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message
is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
*/

function isAValidMessage(message) {
	let result = [];
	const splitted = message
		.split('')
		.map((item, i) => {
			if (
				parseInt(item) !== parseInt(item) &&
				parseInt(message[i + 1]) === parseInt(message[i + 1])
			) {
				return item + ',';
			}
			return item;
		})
		.join('')
		.split(',');

	for (let i = 0; i < splitted.length; i++) {
		const word = splitted[i];
		for (let i = 0; i < word.length; i++) {
			if (
				parseInt(word[i]) === parseInt(word[i]) &&
				parseInt(word[i + 1]) !== parseInt(word[i + 1])
			) {
				const length = word.slice(0, i + 1);
				const string = word.slice(i + 1, word.length);

				if (string.length !== parseInt(length)) {
					result.push(string);
				}
			}
		}
	}
	return result.length === 0;
}
console.log(isAValidMessage(''));
//true
console.log(isAValidMessage('1a2bb3ccc4dddd5eeeee'));
//true
console.log(isAValidMessage('3hey5hello2hi'));
//true
console.log(isAValidMessage('4code13hellocodewars'));
//true
console.log(isAValidMessage('3hey5hello2hi5'));
//false
