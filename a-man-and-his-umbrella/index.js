const minUmbrellas = (weather) => {
	let umbrellasAtHome = 0;
	let umbrellasAtWork = 0;
	const rain = ['rainy', 'thunderstorms'];
	if (
		weather.length === 1 ||
		(!weather.includes('rainy') && !weather.includes('thunderstorms'))
	) {
		return 0;
	}
	weather.forEach((item, i) => {
		if (rain.includes(item)) {
			if (i % 2 === 0) {
				if (!umbrellasAtHome) {
					umbrellasAtWork++;
				} else {
					umbrellasAtHome--;
					umbrellasAtWork++;
				}
			}
			if (i % 2 === 1) {
				if (!umbrellasAtWork) {
					umbrellasAtHome++;
				} else {
					umbrellasAtWork--;
					umbrellasAtHome++;
				}
			}
		}
	});
	return umbrellasAtHome + umbrellasAtWork;
};

console.log(minUmbrellas(['cloudy']));
//0
console.log(minUmbrellas(['rainy', 'rainy', 'rainy', 'rainy']));
//1
console.log(minUmbrellas(['overcast', 'rainy', 'clear', 'thunderstorms']));
//2
