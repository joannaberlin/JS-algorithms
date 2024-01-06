/*
https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript

Pirates have notorious difficulty with enunciating. They tend to blur all the letters
together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output
a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are
no matches.

Good luck!
*/

function grabscrab(anagram, dictionary) {
	let result = [];
	const sortedAn = anagram.split('').sort().join('');
	const sortedDi = dictionary.map((item) => item.split('').sort().join(''));

	for (let i = 0; i < sortedDi.length; i++) {
		const word = sortedDi[i];
		if (word === sortedAn) {
			result.push(dictionary[i]);
		}
	}
	return result;
}

//simplified solution with filter method - less code
// function grabscrab(anagram, dictionary) {
// 	anagram = anagram.split('').sort().join('');
// 	return dictionary.filter((a) => a.split('').sort().join('') === anagram);
// }

// function grabscrab(s, a) {
// 	return a.filter((x) => [...x].sort().join() == [...s].sort().join());
// }

console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']));
//["sport", "ports"]
console.log(grabscrab('trisf', ['first']));
//["first"]
console.log(grabscrab('oob', ['bob', 'baobab']));
//[]
console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa']));
//["mountains"]
