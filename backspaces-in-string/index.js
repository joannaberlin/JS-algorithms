function cleanString(s) {
	if (s === '') return '';
	//having a num of #, it should remove that num of chars before with all these #
	//repeat on changed string
}

//Test cases
cleanString('abc#d##c');
//'ac'
cleanString('abc####d##c#');
//''
// cleanString('');
//''
