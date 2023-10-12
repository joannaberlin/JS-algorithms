/*
https://www.codewars.com/kata/6481c68ffdf80b6147d85248/train/javascript

Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input. Each array contains objects that have an id field with an integer value. The function should merge arr1 and arr2 based on their id key and return a new array, joinedArray, as the result.

The joinedArray should be formed by following these rules:

The length of joinedArray should be equal to the length of unique id values from both arrays combined.
The objects with unique id values from arr1 and arr2 should be included in the joinedArray without modification.
If two objects share the same id, their properties should be merged into a single object:
If a key only exists in one object, include that key-value pair in the merged object.
If a key exists in both objects, the value from arr2 should override the value from arr1.
The joinedArray should be sorted in ascending order based on the id key.
*/

function joinArraysById(arr1, arr2) {
	let joinedArrays = arr1.concat(arr2);
	let mergedObject;

	joinedArrays.sort((a, b) => {
		return a.id - b.id;
	});

	for (let i = 0; i < joinedArrays.length - 1; i++) {
		if (joinedArrays[i].id === joinedArrays[i + 1].id) {
			mergedObject = { ...joinedArrays[i], ...joinedArrays[i + 1] };
			joinedArrays.splice(i, 2, mergedObject);
		}
	}

	return joinedArrays;
}

const arr1 = [
	{ id: 1, x: 1 },
	{ id: 2, x: 9 },
];
const arr2 = [{ id: 3, x: 5 }];

joinArraysById(arr1, arr2);
// Output: [
//   { "id": 1, "x": 1 },
//   { "id": 2, "x": 9 },
//   { "id": 3, "x": 5 }
//]

const arr3 = [
	{ id: 1, x: 2, y: 3 },
	{ id: 2, x: 3, y: 6 },
];
const arr4 = [
	{ id: 2, x: 10, y: 20 },
	{ id: 3, x: 0, y: 0 },
];

joinArraysById(arr3, arr4);
// Output: [
//   { "id": 1, "x": 2, "y": 3 },
//   { "id": 2, "x": 10, "y": 20 },
//   { "id": 3, "x": 0, "y": 0 }
// ]

const arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

joinArraysById(arr5, arr6);
// Output: [
//   { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
// ]

const arr7 = [
	{ id: 2, x: 9 },
	{ id: 1, x: 1 },
];
const arr8 = [
	{ id: 2, y: 2 },
	{ id: 3, z: 3 },
];

joinArraysById(arr7, arr8);
//   output = [
//     { id: 1, x: 1 },
//     { id: 2, x: 9, y: 2 },
//     { id: 3, z: 3 },
//   ]
