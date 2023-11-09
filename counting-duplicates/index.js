function duplicateCount(text) {
	const string = text.toLowerCase();
	const textIterable = string.split('');
	let characterFrequencies = {};
	for (let chr of textIterable) {
		characterFrequencies[chr] = (characterFrequencies[chr] || 0) + 1;
	}
	console.log(characterFrequencies);
	let result = [];
	for (freq in characterFrequencies) {
		if (characterFrequencies[freq] > 1) {
			result.push(`${freq}: ${characterFrequencies[freq]}`);
		}
	}
	console.log(result.length);
}

duplicateCount('aabBcde');
//2
duplicateCount('abcde');
//0
duplicateCount('Indivisibilities');
//2
