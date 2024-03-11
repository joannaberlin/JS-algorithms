/*
https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript

100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'


Words in your solution should be left-aligned.
*/

function mirror(text) {
	const words = text.split(' ');
	const longestWordLength = [...words].sort((a, b) => b.length - a.length)[0]
		.length;
	const reversed = words.map((word, index) => {
		if (words.length === 1) {
			return (
				'*'.repeat(longestWordLength + 4) +
				'\n' +
				'* ' +
				word.split('').reverse().join('') +
				' *\n' +
				'*'.repeat(longestWordLength + 4)
			);
		}
		if (index === 0) {
			return (
				'*'.repeat(longestWordLength + 4) +
				'\n' +
				'* ' +
				word.split('').reverse().join('') +
				' '.repeat(longestWordLength - word.length) +
				' *\n'
			);
		}
		if (index === words.length - 1 && words.length >= 2) {
			return (
				'* ' +
				word.split('').reverse().join('') +
				' '.repeat(longestWordLength - word.length) +
				' *\n' +
				'*'.repeat(longestWordLength + 4)
			);
		}
		return (
			'* ' +
			word.split('').reverse().join('') +
			' '.repeat(longestWordLength - word.length) +
			' *\n'
		);
	});
	return reversed.join('');
}

console.log(mirror('Hello World'));
//'*********\n* olleH *\n* dlroW *\n*********'
console.log(mirror('Codewars'));
//'************\n* srawedoC *\n************'
console.log(mirror('twq mfamqzn dygaqnm ibvrhiph lvmgahxh dvilfyut uvzxhz'));
//'************\n* qwt      *\n* nzqmafm  *\n* mnqagyd  *\n* hpihrvbi *\n* hxhagmvl *\n* tuyflivd *\n* zhxzvu   *\n************'
