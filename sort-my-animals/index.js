/*
https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript

Consider the following class:

var Animal = {
    name: "Cat",
    numberOfLegs: 4
}
Write a method that accepts a list of objects of type Animal, and returns a new list.
The new list should be a copy of the original list, sorted first by the animal's number of legs,
and then by its name.

If an empty list is passed in, it should return an empty list back.
*/

function sortAnimal(animals) {
	const sortedByNum = [...animals].sort(
		(a, b) => a.numberOfLegs - b.numberOfLegs
	);
	const sortedByName = sortedByNum.sort((a, b) => {
		if (a.numberOfLegs === b.numberOfLegs) {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		}
	});
	return sortedByName;
}

//Another solution
// const sortAnimal = (animals) =>
// 	[...animals].sort(
// 		(a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
// 	);

console.log(
	sortAnimal([
		{ name: 'Cat', numberOfLegs: 4 },
		{ name: 'Snake', numberOfLegs: 0 },
		{ name: 'Dog', numberOfLegs: 4 },
		{ name: 'Pig', numberOfLegs: 4 },
		{ name: 'Human', numberOfLegs: 2 },
		{ name: 'Bird', numberOfLegs: 2 },
	])
);
//   [
//     { name: 'Snake', numberOfLegs: 0 },
//     { name: 'Bird', numberOfLegs: 2 },
//     { name: 'Human', numberOfLegs: 2 },
//     { name: 'Cat', numberOfLegs: 4 },
//     { name: 'Dog', numberOfLegs: 4 },
//     { name: 'Pig', numberOfLegs: 4 }
//   ]
console.log(sortAnimal([]));
//[]
