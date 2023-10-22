/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let accumChars = [];
	let result;
	const sToArr = s.split('');

	for (let i = 0; i < sToArr.length; i++) {
		accumChars.push(sToArr[i].repeat(i + 1) + '-');
	}
	result = accumChars.map(
		(item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
	);

	return result.join('').slice(0, -1);
}

//alternative, better approach solution (what I did, but shortened)
// function accum(s) {
// 	return s
// 		.split('')
// 		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
// 		.join('-');
// }

accum('ZpglnRxqenU');
//"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum('abcd');
// "A-Bb-Ccc-Dddd"
