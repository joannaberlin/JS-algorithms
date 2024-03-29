/*
https://www.codewars.com/kata/5971b219d5db74843a000052/train/javascript

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is
actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three
added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

function addedChar(s1, s2) {
	let result;
	const arr2 = s2.split('').sort();
	const arr1 = s1.split('').sort();

	if (arr1[0] === arr2[0]) {
		result = arr2.filter((item, i) => item !== arr1[i])[0];
	} else {
		result = arr2[0];
	}
	return result;
}
console.log(addedChar('hello', 'lhellllo'));
//'l'
console.log(addedChar('hello', 'checlclo'));
//'c'
console.log(addedChar('aabbcc', 'aacccbbcc'));
//'c'
console.log(addedChar('aabbccdd', 'aabbdddccdd'));
//'d'
