function smaller(nums) {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		let count = 0;

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[i]) {
				count++;
			}
		}
		result.push(count);
	}
	return result;
}
//Tests
console.log(smaller([5, 4, 3, 2, 1]));
//[4, 3, 2, 1, 0]
console.log(smaller([1, 2, 0]));
//[1, 1, 0]
