/*
https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078/train/javascript

In this Kata, you will be given a string with brackets and an index of an opening bracket and your task
will be to return the index of the matching closing bracket. Both the input and returned index are
0-based except in Fortran where it is 1-based. An opening brace will always have a closing brace.
Return -1 if there is no answer (in Haskell, return Nothing; in Fortran, return 0; in Go, return an
    error)

Examples
solve("((1)23(45))(aB)", 0) = 10 // the opening brace at index 0 matches the closing brace at index 10
solve("((1)23(45))(aB)", 1) = 3
solve("((1)23(45))(aB)", 2) = -1 // there is no opening bracket at index 2, so return -1
solve("((1)23(45))(aB)", 6) = 9
solve("((1)23(45))(aB)", 11) = 14
solve("((>)|?(*'))(yZ)", 11) = 14
Input will consist of letters, numbers and special characters, but no spaces. The only brackets will be
( and ).
*/

function solve(str, idx) {
	if (str[idx] !== opening) return -1;

	const opening = '(';
	const closing = ')';
	let count = 0;

	for (let i = idx; i < str.length; i++) {
		if (str[i] === opening) {
			count++;
		} else if (str[i] === closing) {
			count--;
			if (count === 0) {
				return i;
			}
		}
	}
}

console.log(solve('((1)23(45))(aB)', 0));
//10
console.log(solve('((1)23(45))(aB)', 2));
//-1
console.log(solve('((1)23(45))(aB)', 11));
//14
