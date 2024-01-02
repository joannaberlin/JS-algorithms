function nameInStr(str, name) {
	const strChars = str.split('');
	const nameChars = name.split('');
	const filtered = strChars.filter((item) => nameChars.includes(item));
	console.log(filtered);
	for (let i = 0; i < name.length; i++) {}
}

nameInStr('Across the rivers', 'chris');
//true
nameInStr('Next to a lake', 'chris');
//false
nameInStr('A crew that boards the ship', 'chris');
//false
nameInStr('A live son', 'Allison');
//false
