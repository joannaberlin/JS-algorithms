/*
https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

Reverse every other word in a given string, then return the string. Throw away any leading or
trailing whitespace, while ensuring there is exactly one space between each word. Punctuation
marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str) {
	let result = [];
	const arr = str.split(' ');
	if (arr.filter((item) => item !== '').length === 0) return '';
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
		if (i < arr.length - 1 && (i += 1)) {
			const reversed = arr[i].split('').reverse().join('');
			result.push(reversed);
		}
	}
	return result.join(' ');
}

//other solution
// function reverse(str) {
// 	let arr = str.split(' ');
// 	for (var i = 1; i < arr.length; i += 2) {
// 		arr[i] = arr[i].split('').reverse().join('');
// 	}
// 	return arr.join(' ').trim();
// }

console.log(reverse('Reverse this string, please!'));
//"Reverse siht string, !esaelp"
console.log(reverse('Did it work?'));
//"Did ti work?"
console.log(reverse('    '));
//''
