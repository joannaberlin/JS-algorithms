/*
https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

In this Kata, you will be given an array of strings and your task is to remove
all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

function dup(s) {
	const res = [];
	const result = s.map((item) => {
		for (let i = 0; i < item.length; i++) {
			if (item[i] !== item[i + 1]) {
				if (i !== item.length - 1) {
					res.push(item[i]);
				} else {
					res.push(item[i] + ' ');
				}
			}
		}
		return res.join('');
	});
	return result[result.length - 1].split(' ').filter((item) => item !== '');
}

//with RegEx
// function dup(s) {
// 	return s.map((x) => x.replace(/(.)\1+/g, '$1'));
// }
//another example of solution
// function dup(s) {
// 	return s.map((w) => {
// 		return w
// 			.split('')
// 			.filter((c, i, arr) => {
// 				return c !== arr[i - 1];
// 			})
// 			.join('');
// 	});
// }

console.log(
	dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
);
//['codewars','picaniny','hubububo']
