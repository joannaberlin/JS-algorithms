/*
https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must
find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both
a string and a number within it. If the character code of any of the characters in
the string matches the number, you get a mini win. Note you can only have one mini
win per sub array.

Once you have counted all of your mini wins, compare that number to the other input
provided (win). If your total is more than or equal to (win), return 'Winner!'. Else
return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same
length.
*/

function bingo(ticket, win) {
	let winsCount = 0;
	for (let item of ticket) {
		for (let index in item[0]) {
			if (item[0].charCodeAt(index) === item[1] && item.length === 2) {
				winsCount++;
				item.push(winsCount);
			}
		}
	}
	return winsCount >= win ? 'Winner!' : 'Loser!';
}

console.log(
	bingo(
		[
			['ABC', 65],
			['HGR', 74],
			['BYHT', 74],
		],
		2
	)
);
//'Loser!'
console.log(
	bingo(
		[
			['ABC', 65],
			['HGR', 74],
			['BYHT', 74],
		],
		1
	)
);
//'Winner!'
console.log(
	bingo(
		[
			['HGTYRE', 74],
			['BE', 66],
			['JKTY', 74],
		],
		3
	)
);
//'Loser!'

console.log(
	bingo(
		[
			['OIISDD', 87],
			['LTKFMTN', 77],
			['HYEV', 69],
			['PJSOCHRF', 78],
			['HYH', 67],
			['NN', 87],
			['TEL', 89],
			['TXV', 78],
			['BDXSLOU', 70],
			['ICIXCBS', 73],
		],
		4
	)
);
//'Loser!'

console.log(
	bingo(
		[
			['LXL', 87],
			['STASZM', 71],
			['QYKIYZYP', 81],
			['KXYFVULY', 70],
			['DG', 89],
			['SIFC', 69],
		],
		1
	)
);
