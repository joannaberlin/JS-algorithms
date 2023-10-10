/*
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

(Use the English alphabet with 26 letters!)
*/

function findMissingLetter(array) {
	// we can skip the 1st letter
	for (let i = 1; i < array.length; i++) {
		// get the char code of the previous letter
		const prev = array[i - 1].charCodeAt();
		// get the char code of the current letter
		const current = array[i].charCodeAt();

		if (current - prev !== 1) {
			// if the difference between current and previous is not 1
			// get the character after the previous
			return String.fromCharCode(prev + 1);
		}
	}

	return null; // if nothing is found
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
//'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
//'P'
