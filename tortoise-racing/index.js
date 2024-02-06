function race(v1, v2, g) {
	const totalSeconds = Math.floor((g * 3600) / (v2 - v1));

	// Calculate hours, minutes, and seconds
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return [hours, minutes, seconds];
}

console.log(race(80, 100, 40));
//[2, 0, 0]
console.log(race(720, 850, 37));
//[0, 17, 4]
console.log(race(80, 91, 37));
//[3, 21, 49]
