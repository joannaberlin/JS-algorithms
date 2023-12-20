/*
https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript

You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
Inputs:
1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2
Outputs
FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar
Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.
*/

function extractFileName(dirtyFileName) {
	let firstCut;
	let result;
	for (let i = 0; i < dirtyFileName.length; i++) {
		if (dirtyFileName[i] === '_') {
			firstCut = dirtyFileName.slice(i + 1);
			break;
		}
	}
	for (let i = firstCut.length - 1; i >= 0; i--) {
		if (firstCut[i] === '.') {
			result = firstCut.slice(0, i);
			break;
		}
	}
	return result;
}

//RegEx and arrow function
// const dirtyFileName = (dirty) => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];

//Another solution
// function extractFileName(dirtyFileName) {
// 	var numSlice = dirtyFileName.indexOf('_');
// 	var extSlice = dirtyFileName.lastIndexOf('.');
// 	dirtyFileName = dirtyFileName.slice(numSlice + 1, extSlice);
// 	return dirtyFileName;
// }

extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION');
//FILE_NAME.EXTENSION
extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34');
//This_is_an_otherExample.mpg
extractFileName('1231231223123131_myFile.tar.gz2');
//myFile.tar
