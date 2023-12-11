/*
https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
	let result = [];
	let chars = str.split('');
	for (let char of chars) {
		if (char.toUpperCase() === char) {
			result.push(char.toLowerCase());
		} else {
			result.push(char.toUpperCase());
		}
	}
	const changedStr = result.join('');
	return changedStr.split(' ').reverse().join(' ');
}

//another solution with a use of map
function stringTransformer(str) {
	return str
		.split(' ')
		.reverse()
		.join(' ')
		.split('')
		.map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
		.join('');
}

console.log(stringTransformer('Example string need to be REVERSED'));
//'reversed BE TO NEED STRING eXAMPLE'
