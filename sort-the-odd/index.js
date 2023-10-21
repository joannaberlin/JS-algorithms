function sortArray(array) {
	const odds = array.filter((x) => x % 2).sort((a, b) => a - b);

	console.log(array.map((x) => (x % 2 ? odds.shift() : x)));
}

sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
//[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
sortArray([5, 3, 2, 8, 1, 4]);
//[1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]);
//[1, 3, 5, 8, 0]
sortArray([]);
//[]
