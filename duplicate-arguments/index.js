/*
https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

Complete the solution so that it returns true if it contains any duplicate argument
values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return
values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

function solution() {
	let args = [];
	for (let value of arguments) {
		args.push(value);
	}
	return args.length !== new Set(args).size;
}

//I could just do this
function solution() {
	return new Set(arguments).size != arguments.length;
}
//another solution
function solution(...args) {
	return args.length !== new Set(args).size;
}

//Test cases
console.log(solution(1, 2, 3, 6, 5, 6));
//true
console.log(solution(1, 2, 3));
//false
console.log(solution('a', 'b', 'c', 'a'));
//true
console.log(solution(1, 2, 3, 'a', 'b'));
//false
