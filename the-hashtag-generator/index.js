function generateHashtag(str) {
	let chars = str.split('');
	if (str === '') return false;

	for (let i = 0; i < chars.length; i++) {
		if (
			chars[i].includes(' ') &&
			chars[i + 1] !== chars[i].includes(' ') &&
			chars[i] !== ' '
		) {
			chars.splice(i + 1, 1, chars[i + 1].toUpperCase());
		}
	}
	console.log(chars);
	const filteredWithoutSpaces = chars.filter((char) => char !== ' ');
	console.log(filteredWithoutSpaces);
	const charsCapitalized = filteredWithoutSpaces.map((item, i) =>
		i === 0 ? item.toUpperCase() : item
	);
	// console.log(charsCapitalized);
	const result = charsCapitalized.join('');
	if (result.length > 141 || result === '') return false;
	return `#${result}`;
}
console.log(generateHashtag('       '));
// console.log(generateHashtag(''));
//false
// console.log(generateHashtag('do We have A Hashtag'));
//"#DoWeHaveAHashtag"
// console.log(generateHashtag('codewars'));
//"#Codewars"
// console.log(generateHashtag('Codewars Is Nice'));
//"#CodewarsIsNice"
// console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
//"#CodeWars"
// console.log(generateHashtag('code' + ' '.repeat(10) + 'wars'));
//"#CodeWars"
// console.log(generateHashtag('     Hello    there thanks for trying my Kata'));
//"#HelloThereThanksForTryingMyKata"
