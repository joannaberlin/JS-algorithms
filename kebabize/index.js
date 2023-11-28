/*
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
	let chars = str.split('');
	const filteredNums = chars.filter((char) => isNaN(Number(char)));
	const kebChars = filteredNums.map((char) =>
		char === char.toUpperCase() ? '-' + char.toLowerCase() : char.toLowerCase()
	);
	const resultString = kebChars.join('');
	return resultString[0] === '-' ? resultString.slice(1) : resultString;
}

console.log(kebabize('MyCamelCasedString'));
// 'my-camel-cased-string'
console.log(kebabize('MyCamelHas3Humps'));
// 'my-camel-has-humps'
console.log(kebabize('CAMEL'));
// 'c-a-m-e-l'
console.log(kebabize('cAMEL'));
// 'c-a-m-e-l'
