/*
https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the
number in the equation. There will be dots on one side, an operator, and dots again after
the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result
is 0, return the empty string. When it comes to subtraction, the first number will always be
greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator(equation) {
	let dotsCountFirst;
	let dotsCountSecond;
	let resultDotsLength;
	let operator;
	let dot = '.';

	if (equation.includes('//')) {
		for (let i = 0; i < equation.length; i++) {
			if (equation[i] === ' ') {
				dotsCountFirst = equation.slice(0, i - 3).length;
				dotsCountSecond = equation.slice(i + 1).length;
			}
			if (equation[i] + equation[i + 1] === '//') {
				operator = equation[i];
			}
		}
	} else if (
		equation.includes('+') ||
		equation.includes('-') ||
		equation.includes('*')
	) {
		for (let i = 0; i < equation.length; i++) {
			if (equation[i] === ' ') {
				dotsCountFirst = equation.slice(0, i - 2).length;
				dotsCountSecond = equation.slice(i + 1).length;
			}
			if (equation[i] === '+' || equation[i] === '-' || equation[i] === '*') {
				operator = equation[i];
			}
		}
	}
	switch (operator) {
		case '+':
			resultDotsLength = dotsCountFirst + dotsCountSecond;
			break;
		case '-':
			resultDotsLength = dotsCountFirst - dotsCountSecond;
			break;
		case '*':
			resultDotsLength = dotsCountFirst * dotsCountSecond;
			break;
		case '/':
			resultDotsLength = dotsCountFirst / dotsCountSecond;
			break;
	}
	const result = dot.repeat(resultDotsLength);
	return resultDotsLength <= 0 ? '' : result;
}

console.log(dotCalculator('..... + ...............'));
//"...................."
console.log(dotCalculator('..... - ...'));
//".."
console.log(dotCalculator('.. - ..'));
//""
console.log(dotCalculator('..... * ..'));
//".........."
console.log(dotCalculator('. // ..'));
//""
