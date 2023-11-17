/*
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and
that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function findMissingLetter(array) {
	let start, end, result;
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const arrayLowerCase = array.map((item) => item.toLowerCase());
	for (let i = 0; i < arrayLowerCase.length; i++) {
		start = alphabet.indexOf(arrayLowerCase[0]);
		end = alphabet.indexOf(arrayLowerCase[arrayLowerCase.length - 1]) + 1;
	}
	const arr = alphabet.slice(start, end);
	for (let char of arr) {
		if (!arrayLowerCase.includes(char)) {
			result = char;
		}
	}
	if (array[0] === array[0].toUpperCase()) {
		return result.toUpperCase();
	} else {
		return result;
	}
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
//'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
//'P'
