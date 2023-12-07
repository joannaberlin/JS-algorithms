function removeParentheses(s) {
	let openingParsIndexes = [];
	let closingParsIndexes = [];
	let arrWithWordsToBeRemoved = [];
	let nested = false;
	const arr = s.split('');
	//find index of opening par and find index of closing and remove that part of a string
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			openingParsIndexes.push(i);
		}
		if (s[i] === ')') {
			closingParsIndexes.push(i);
		}
		if (
			openingParsIndexes.length > 1 &&
			closingParsIndexes.length > 1 &&
			openingParsIndexes[1] < closingParsIndexes[0]
		) {
			nested = true;
		}
	}
	if (nested) {
		const first = s.slice(0, openingParsIndexes[0]);
		const second = s.slice(
			closingParsIndexes[closingParsIndexes.length - 1] + 1
		);
		return first + second;
	}
	if (openingParsIndexes.length === 1 && closingParsIndexes.length === 1) {
		const first = s.slice(0, openingParsIndexes[0]);
		const second = s.slice(closingParsIndexes[0] + 1);
		return first + second;
	}
	for (let i = 0; i < openingParsIndexes.length; i++) {
		for (let i = 0; i < closingParsIndexes.length; i++) {
			let word = s.slice(openingParsIndexes[i] + 1, closingParsIndexes[i]);
			if (arrWithWordsToBeRemoved.length <= i) {
				arrWithWordsToBeRemoved.push(word);
			}
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '(' || arr[i] === ')') {
			arr.splice(i, 1, 'X');
		}
	}
	// console.log('ARR:', arr.join('').split('X'));
	const strInArr = arr
		.join('')
		.split('X')
		.filter((item) => item !== '');

	const wordsToBeRemovedSet = new Set(arrWithWordsToBeRemoved);
	const resultArray = strInArr.filter((word) => !wordsToBeRemovedSet.has(word));
	return resultArray.join('');
}

console.log(removeParentheses('example(unwanted thing)example'));
//"exampleexample"
console.log(removeParentheses('a (bc d)e'));
//"a e"
console.log(
	removeParentheses('hello example (words(more words) here) something')
);
//"hello example  something"
console.log(
	removeParentheses('(first group) (second group) (third group) (fourth group)')
);
//"  "
