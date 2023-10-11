/*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
	let result;
	//split string into chars and put into array
	const chars = string.split('');

	result = chars
		.map((char) => (char === char.toUpperCase() ? ' ' + char : char))
		.join('');

	return result;
}

solution('camelCasing');
//'camel Casing', 'Unexpected result'
solution('camelCasingTest');
//'camel Casing Test', 'Unexpected result'
solution('camelcasing');
