function autocorrect(input) {
	let result;
	const words = input.split(' ').map((word) => word.toLowerCase());
	if (input.toLowerCase() === 'you' || input.toLowerCase() === 'u') {
		result = 'your sister';
	}
	if (words.includes('u') || words.includes('you')) {
		result = words
			.map((word) => (word === 'u' || word === 'you' ? 'your sister' : word))
			.join(' ');
	}
	if (
		input.length > 3 &&
		input[0].toLowerCase() === 'y' &&
		input[1].toLowerCase() === 'o' &&
		input[2].toLowerCase() === 'u' &&
		input[3].toLowerCase() === 'u'
	) {
		const restChars = input.toLowerCase().slice(3, input.length).split('');
		const unwantedChars = restChars.filter((char) => char !== 'u');
		if (unwantedChars.length === 0) {
			return 'your sister';
		}
	}
	if (input.toLowerCase().includes('youu')) {
		for (let word of words) {
			if (
				word[0] === 'y' &&
				word[1] === 'o' &&
				word[2] === 'u' &&
				word[3] === 'u'
			) {
				const restChars = word.slice(3, word.length).split('');
				const unwantedChars = restChars.filter((char) => char !== 'u');
				if (unwantedChars.length === 0) {
					result = words
						.map((word) => (word.includes('youu') ? 'your sister' : word))
						.join(' ');
				}
			}
		}
	}
	return result;
}

console.log(autocorrect('hey youtube'));
//"hey your sister"
console.log(autocorrect('youuu'));
//"your sister"
console.log(autocorrect('u'));
//"your sister"
console.log(autocorrect('youuuu'));
//"your sister"
console.log(autocorrect('hey u girl'));
//"your sister"
console.log(autocorrect('hey you grl'));
//"your sister"
console.log(autocorrect('u r beautiful'));
//"your sister"
