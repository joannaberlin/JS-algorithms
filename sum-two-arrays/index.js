function addArrays(array1, array2) {
	if (array1.length === 0 || array2.length === 0) return [];
	if (array1.length === 0 && array2.length > 0) return array2;
	if (array2.length === 0 && array1.length > 0) return array1;

	const arrayToNumber1 = parseInt(array1.join(''));
	const arrayToNumber2 = parseInt(array2.join(''));
	const sum = arrayToNumber1 + arrayToNumber2;

	if (sum < 0) {
		const sumWithoutMinus = sum.toString().slice(1).split('');
		return sumWithoutMinus.map((item, i) =>
			i === 0 ? parseInt('-' + item) : parseInt(item)
		);
	}
	return sum
		.toString()
		.split('')
		.map((item) => parseInt(item));
}

console.log(addArrays([6, 7], [6, 7]));
//[ 1, 3, 4 ]
console.log(addArrays([1], [5, 7, 6]));
//[5,7,7]
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]));
// [-3,9,6,2]
console.log(addArrays([7, 7], [-6, 7]));
//[1, 0]
