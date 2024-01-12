/*
https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

function changer(str) {
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
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const result = str
		.split('')
		.map((item) => {
			if (item.toLowerCase() === 'z') {
				return 'A';
			}
			if (alphabet.includes(item.toLowerCase())) {
				return item.replace(
					item,
					alphabet[alphabet.indexOf(item.toLowerCase()) + 1]
				);
			}
			return item;
		})
		.map((item) => {
			if (vowels.includes(item.toLowerCase())) {
				return item.toUpperCase();
			}
			return item;
		})
		.join('');
	console.log(result);
}

changer('Cat30');
//'dbU30'
changer('Alice');
//'bmjdf'
changer('sponge1');
//'tqpOhf1'
changer('z');
//'A'
