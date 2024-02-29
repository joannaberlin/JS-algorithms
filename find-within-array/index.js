/*
https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

We'll create a function that takes in two parameters:

a sequence (length and types of items are irrelevant)
a function (value, index) that will be called on members of the sequence and their index. The function
will return either true or false.
Your function will iterate through the members of the sequence in order until the provided function
returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3
*/

const trueIfEven = (v, i) => {
	return v % 2 === 0;
};
const neverTrue = (v, i) => {
	return false;
};
const trueIfValueEqualsIndex = (v, i) => {
	return v === i;
};
const trueIfLengthEqualsIndex = (v, i) => {
	return v.length === i;
};

const findInArray = (array, iterator) => {
	let result;
	if (array.length === 0 || iterator === neverTrue) result = -1;

	for (let i = 0; i < array.length; i++) {
		if (iterator === trueIfEven) {
			if (trueIfEven(array[i], i)) {
				result = i;
				break;
			}
		}
		if (iterator === trueIfValueEqualsIndex) {
			if (trueIfValueEqualsIndex(array[i], i)) {
				if (array[i] === i) {
					result = i;
					break;
				}
			}
		}
		if (iterator === trueIfLengthEqualsIndex) {
			if (trueIfLengthEqualsIndex(array[i], i)) {
				if (array[i].length === i) {
					result = i;
					break;
				}
			} else {
				result = -1;
			}
		}
	}
	return result;
};

//And that could be solved in one line ;D
// const findInArray = (array, iterator) => array.findIndex(iterator);

console.log(findInArray([], trueIfEven));
//-1
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven));
//3
console.log(findInArray([2, 4, 6, 8], trueIfEven));
//0
console.log(findInArray([2, 4, 6, 8], neverTrue));
//-1
console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex));
//4
console.log(
	findInArray(
		['one', 'two', 'three', 'four', 'five', 'six'],
		trueIfLengthEqualsIndex
	)
);
//4
console.log(findInArray(['bc', 'af', 'd', 'e'], trueIfLengthEqualsIndex));
//-1
