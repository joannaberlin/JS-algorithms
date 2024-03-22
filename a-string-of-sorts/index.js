/*
https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/train/javascript

Define a method that accepts 2 strings as parameters. The method returns the first
string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second
string characters repeat, so you should remove repeating characters, leaving only
the first occurrence.

Any character in the first string that does not appear in the second string should be
sorted to the end of the result in original order.
*/

function sortString(string, ordering) {
	let result = [];
	const orderingNoRepeats = ordering
		.split('')
		.filter((item, index, array) => array.indexOf(item) === index);

	const orderMap = new Map();
	orderingNoRepeats.forEach((char, index) => {
		orderMap.set(char, index);
	});

	result = string.split('').sort((a, b) => {
		const indexA = orderMap.get(a);
		const indexB = orderMap.get(b);
		if (indexA === undefined) return 1;
		if (indexB === undefined) return -1;
		return indexA - indexB;
	});

	return result.join('');
}

console.log(sortString('foos', 'of'));
//should return "oofs"
console.log(sortString('string', 'gnirts'));
//should return "gnirts"
console.log(sortString('banana', 'abn'));
//should return "aaabnn"
console.log(sortString('abcdea', 'ba'));
//should return "baacde"
