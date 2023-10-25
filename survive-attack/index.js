/*
https://www.codewars.com/kata/634d0f7c562caa0016debac5/train/javascript

Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power.
If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.
EXAMPLES

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
//1 survivors                3 survivors
//return true

*/

function hasSurvived(attackers, defenders) {
	let attackersSurvivors = 0;
	let defendersSurvivors = 0;

	function sumSurvivors(i, arr1, arr2) {
		if (arr1[i] > arr2[i]) attackersSurvivors++;
		if (arr2[i] > arr1[i]) defendersSurvivors++;
	}

	if (attackers.length === 0 && defenders.length > 0) return true;
	if (defenders.length === 0 && attackers.length > 0) return false;

	if (attackers.length > 0 && attackers.length === defenders.length) {
		for (let i in attackers) {
			sumSurvivors(i, attackers, defenders);
		}
		if (attackersSurvivors === defendersSurvivors) {
			const initialAttackAttackers = attackers.reduce((a, b) => a + b, 0);
			const initialAttackDefenders = defenders.reduce((a, b) => a + b, 0);
			return initialAttackDefenders > initialAttackAttackers ||
				initialAttackDefenders === initialAttackAttackers
				? true
				: false;
		} else {
			return defendersSurvivors > attackersSurvivors ? true : false;
		}
	}
	if (attackers.length > defenders.length && defenders.length > 0) {
		for (let i in attackers) {
			if (!defenders[i]) defenders.push(0);
			sumSurvivors(i, attackers, defenders);
		}
		if (attackersSurvivors === defendersSurvivors) {
			const initialAttackAttackers = attackers.reduce((a, b) => a + b, 0);
			const initialAttackDefenders = defenders.reduce((a, b) => a + b, 0);
			return initialAttackDefenders > initialAttackAttackers ||
				initialAttackDefenders === initialAttackAttackers
				? true
				: false;
		} else {
			return defendersSurvivors > attackersSurvivors ? true : false;
		}
	}
	if (defenders.length > attackers.length && attackers.length > 0) {
		for (let i in defenders) {
			if (!attackers[i]) attackers.push(0);
			sumSurvivors(i, attackers, defenders);
		}
		if (attackersSurvivors === defendersSurvivors) {
			const initialAttackAttackers = attackers.reduce((a, b) => a + b, 0);
			const initialAttackDefenders = defenders.reduce((a, b) => a + b, 0);
			return initialAttackDefenders > initialAttackAttackers ||
				initialAttackDefenders === initialAttackAttackers
				? true
				: false;
		} else {
			return defendersSurvivors > attackersSurvivors ? true : false;
		}
	}
}

// better approach solution:
// function hasSurvived(a, d) {
// 	const aStart = a.reduce((val, acc) => acc + val, 0);
// 	const dStart = d.reduce((val, acc) => acc + val, 0);

// 	let dAfterFight = d.filter((el, idx) => 0 < el - a[idx]).length;
// 	let aAfterFight = a.filter((el, idx) => 0 < el - d[idx]).length;

// 	if (dAfterFight > aAfterFight) return true;
// 	if (dAfterFight === aAfterFight) return dStart >= aStart;
// 	return false;
// }

hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]);
//false
hasSurvived([1, 1, 1, 1], [2, 2, 2]);
//true
hasSurvived([10, 1, 1], [4, 4, 7, 7]);
//true
hasSurvived([], [1, 2, 3]);
//true
hasSurvived([1, 2, 3], [1, 2, 3]);
//true
