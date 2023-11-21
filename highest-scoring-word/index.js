function high(x) {
	let maxArr = [];
	const alphabet = [
		'',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const words = x.split(' ');
	const score = words.map((item) =>
		item.split('').map((char) => alphabet.indexOf(char))
	);

	for (let i = 0; i < score.length; i++) {
		let currentSum = score[i].reduce((sum, num) => sum + num, 0);
		if (currentSum > maxArr.reduce((sum, num) => sum + num, 0)) {
			maxArr = score[i];
		}
	}

	return words[score.indexOf(maxArr)];
}

// simplest solution
// function high(x){
//     let alphabets = [
//       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//     ];

//     let words = x.split(" ");
//     let highestScore = 0;
//     let highestScoreWord = "";

//     for (let word of words) {
//       let lettersSum = 0;

//       for (let letter of word) {
//         lettersSum += alphabets.indexOf(letter) + 1;
//       }

//       if (lettersSum > highestScore) {
//         highestScore = lettersSum;
//         highestScoreWord = word;
//       }
//     }

//     return highestScoreWord;
//   }

high('man i need a taxi up to ubud');
//'taxi'
high('b aaa');
//'a'
high('b aa');
//'b'
high('take me to semynak');
//'semynak'
