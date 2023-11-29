/*
https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple
of a number at any place in num1 and also a straight double of the same number
in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only
a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
	let result = 0;
	const str1 = num1.toString();
	const str2 = num2.toString();
	let arrWithTriples = [];
	let arrWithDoubles = [];
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] === str1[i + 1] && str1[i] === str1[i + 2]) {
			arrWithTriples.push(str1[i].repeat(2));
		}
	}
	for (let i = 0; i < str2.length; i++) {
		if (str2[i] === str2[i + 1]) {
			arrWithDoubles.push(str2[i].repeat(2));
		}
	}
	if (arrWithDoubles.length !== 0) {
		for (let item of arrWithDoubles) {
			if (arrWithTriples.includes(item)) {
				result = 1;
			}
		}
	}
	return result;
}

console.log(tripledouble(451999277, 41177722899));
//1
console.log(tripledouble(1222345, 12345));
//0
console.log(tripledouble(10560002, 100));
//1
console.log(tripledouble(1112, 122));
//0
console.log(tripledouble(66633777, 6633));
//1
