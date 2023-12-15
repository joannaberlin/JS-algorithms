/*
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

Write a function that accepts a string, and returns the same string with all
even indexed characters in each word upper cased, and all odd indexed characters
in each word lower cased. The indexing just explained is zero based, so the
zero-ith index is even, therefore that character should be upper cased and you
need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by
a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
	const resultArr = [];
	const words = string.split(' ');
	const allUpperCased = words.map((word) => word.toUpperCase() + ' ');

	for (let word of allUpperCased) {
		for (let i = 0; i < word.length; i++) {
			if (i % 2 === 0) {
				resultArr.push(word[i]);
			} else {
				resultArr.push(word[i].toLowerCase());
			}
		}
	}
	return resultArr.join('').trim();
}

//interesting solution
function toWeirdCase(string) {
	return string
		.split(' ')
		.map(function (word) {
			return word
				.split('')
				.map(function (letter, index) {
					return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
				})
				.join('');
		})
		.join(' ');
}

toWeirdCase('This');
//'ThIs'
toWeirdCase('This is a test');
//'ThIs Is A TeSt'
toWeirdCase('Impoderabilia');
//ImPoDeRaBiLiA
