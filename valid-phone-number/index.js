function validPhoneNumber(phoneNumber) {
	//0,1,2,3,4,5,6,7,8,9,10,11
	const validateInt = (int) => {
		return int >= 0 && int <= 9;
	};

	return phoneNumber[0] === '(' &&
		validateInt(phoneNumber[1]) &&
		validateInt(phoneNumber[2]) &&
		validateInt(phoneNumber[3]) &&
		phoneNumber[4] === ')' &&
		phoneNumber[5] === ' ' &&
		validateInt(phoneNumber[6]) &&
		validateInt(phoneNumber[7]) &&
		validateInt(phoneNumber[8]) &&
		phoneNumber[9] === '-' &&
		validateInt(phoneNumber[10]) &&
		validateInt(phoneNumber[11]) &&
		validateInt(phoneNumber[12]) &&
		validateInt(phoneNumber[13])
		? true
		: false;
}

console.log(validPhoneNumber('(023) 456-7890'));
//true
console.log(validPhoneNumber('(1111)555 2345'));
//false
console.log(validPhoneNumber('(098) 123 4567'));
//false
