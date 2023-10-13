/*
Write a JavaScript program to remove a character at the specified position in a given
string and return the modified string.
*/

const removeCharInString = (str, pos) => {
	const charToBeRemoved = str.charAt(pos);

	return str.replace(`${charToBeRemoved}`, '');
};

//Alternative solution:

// const removeCharInString = (str, pos) => {
// 	part1 = str.substring(0, pos);
// 	part2 = str.substring(pos + 1, str.length);

// 	return part1 + part2;
// };

console.log(removeCharInString('abundrance', 5));
//'abundance'
