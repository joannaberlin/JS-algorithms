/*
https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript

The Hamming Distance is a measure of similarity between two strings of equal length.
Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
You can assume that the two inputs are ASCII strings of equal length.
*/

function hamming(a, b) {
	return a.split('').filter((item, i) => item !== b.split('')[i]).length;
}

console.log(hamming('I like turtles', 'I like turkeys'));
//3
console.log(hamming('Hello World', 'Hello World'));
//0
console.log(hamming('old father, old artificer', 'of my soul the uncreated '));
//24
console.log(hamming('espresso', 'Expresso'));
//2
