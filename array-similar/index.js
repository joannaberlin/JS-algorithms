/*
https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

Write a function that determines whether the passed in sequences are similar. Similar means they
contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

function arraysSimilar(arr1, arr2) {
	const count1 = {};
	let count2 = {};
	for (let i = 0; i < arr1.length; i++) {
		let item = arr1[i];
		if (typeof item !== 'number') {
			return false;
		}
		if (count1[item]) {
			count1[item] += 1;
		} else {
			count1[item] = 1;
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		let item = arr2[i];
		if (typeof item !== 'number') {
			return false;
		}
		if (count2[item]) {
			count2[item] += 1;
		} else {
			count2[item] = 1;
		}
	}
	let equality = JSON.stringify(count1) === JSON.stringify(count2);
	return equality;
}

//similiar solution, without turning arr into object, bc it is an object ;)
function arraysSimilar(arr1, arr2) {
	return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]));
//true
console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 2, 3, 4]));
//false
console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, '4']));
//false
