/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to
determine the number of pair of gloves you can constitute from the gloves you have in
your drawer.

Given an array describing the color of each glove, return the number of pairs you can
constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
	let count = 0;
	const sorted = [...gloves].sort();
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === sorted[i + 1]) {
			count++;
			i++;
		}
	}
	return count;
}

console.log(
	numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])
);
//3
console.log(
	numberOfPairs([
		'Gray',
		'Silver',
		'Navy',
		'White',
		'White',
		'Blue',
		'Lime',
		'Black',
		'Teal',
		'Purple',
		'Aqua',
		'White',
		'Maroon',
		'Yellow',
		'Gray',
		'Aqua',
		'Aqua',
		'Navy',
		'Silver',
		'Red',
		'Navy',
		'Olive',
		'Red',
		'Maroon',
		'Blue',
		'Fuchsia',
		'Black',
		'Yellow',
		'Blue',
		'Maroon',
		'Yellow',
		'Green',
		'Yellow',
		'Purple',
		'Silver',
		'Black',
		'White',
		'Fuchsia',
		'Silver',
		'Lime',
		'Green',
		'Yellow',
		'White',
		'Silver',
		'Maroon',
		'Purple',
		'Green',
		'Teal',
		'Aqua',
		'Black',
		'Silver',
		'Red',
		'Green',
		'Blue',
		'Silver',
		'Green',
		'Aqua',
		'Navy',
		'Yellow',
		'Fuchsia',
		'Red',
		'Green',
		'Maroon',
		'Silver',
		'Fuchsia',
		'Red',
		'Aqua',
		'Olive',
		'Black',
		'Lime',
		'Olive',
		'Maroon',
		'Green',
		'Purple',
		'Red',
		'Green',
		'Teal',
		'Black',
		'Navy',
		'White',
		'Maroon',
		'White',
		'Maroon',
		'Lime',
		'Aqua',
		'Black',
		'Yellow',
		'Red',
		'Aqua',
		'Yellow',
		'Purple',
		'Green',
		'Fuchsia',
	])
);
