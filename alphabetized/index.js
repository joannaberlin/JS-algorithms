/*
https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript

Re-order the characters of a string, so that they are concatenated into a new
string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace
and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing
the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

function alphabetized(s) {
	const excludedChars = ' !#$%&()*+,-=@^_`';
	const letters = s
		.split('')
		.filter((item) => !excludedChars.includes(item) && !parseInt(item));
	const sortedLetters = letters
		.map((char, index) => ({ char: char.toLowerCase(), index }))
		.sort((a, b) => {
			if (a.char < b.char) return -1;
			if (a.char > b.char) return 1;
			return a.index - b.index;
		});
	return sortedLetters.map((item) => letters[item.index]).join('');
}

console.log(alphabetized('The Holy Bible'));
//'BbeehHilloTy'
console.log(alphabetized('!#$%&()*+,-=@^_`'));
//''
console.log(alphabetized('99aAdDfFHhhHilLopqsSv'));
//'aAdDfFHhhHilLopqsSv'
