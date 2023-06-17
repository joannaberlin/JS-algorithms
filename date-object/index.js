//Write a JavaScript program to display the current day and time in the following format.

//Sample Output :
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

/* const printDate = () => {
	const today = new Date();
	const hour = today.getHours();
	const currentDayOfWeek = today.getDay();
	const currentTime = today.toISOString().slice(11, 19);
	const prepand = hour >= 12 ? 'PM' : 'AM';
	const currentTimeResult =
		'Current time is : ' +
		currentTime.slice(0, 2) +
		' ' +
		prepand +
		' : ' +
		currentTime.slice(3, 5) +
		' ' +
		currentTime.slice(5, 6) +
		' ' +
		currentTime.slice(6, 8);
	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	const currentDayOfWeekResult =
		'Today is : ' + daysOfWeek[currentDayOfWeek - 1] + '.\n';

	return currentDayOfWeekResult + currentTimeResult;
};

console.log(printDate()); */

// Solution ES6

const printCurrentDate = () => {
	const clock = document.getElementById('clock');

	const today = new Date();
	const day = today.getDay();
	const daylist = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday ',
		'Thursday',
		'Friday',
		'Saturday',
	];
	console.log(`Today is : ${daylist[day]}.`);
	let hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();
	let prepand = hour >= 12 ? ' PM ' : ' AM ';
	hour = hour >= 12 ? hour - 12 : hour;
	if (hour === 0 && prepand === ' PM ') {
		if (minute === 0 && second === 0) {
			hour = 12;
			prepand = ' Noon';
		} else {
			hour = 12;
			prepand = ' PM';
		}
	}
	if (hour === 0 && prepand === ' AM ') {
		if (minute === 0 && second === 0) {
			hour = 12;
			prepand = ' Midnight';
		} else {
			hour = 12;
			prepand = ' AM';
		}
	}
	console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);

	clock.innerHTML = `Current Time : ${hour}${prepand} : ${minute} : ${second}`;
};

printCurrentDate();
