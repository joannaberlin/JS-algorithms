/*
https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
	let peopleWhoSeenDead = [];

	for (const [key, value] of Object.entries(suspectInfo)) {
		for (let person of dead) {
			if (value.includes(person)) {
				peopleWhoSeenDead.push(key);
			}
		}
	}
	if (peopleWhoSeenDead.length === 1) {
		return peopleWhoSeenDead[0];
	}
	for (let i = 0; i < peopleWhoSeenDead.length; i++) {
		if (peopleWhoSeenDead[i] === peopleWhoSeenDead[i + 1]) {
			return peopleWhoSeenDead[i];
		}
	}
}

// better solution
function killer(suspectInfo, dead) {
	return Object.keys(suspectInfo).find((x) =>
		dead.every((y) => suspectInfo[x].includes(y))
	);
}

killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben']);
//'Megan';
killer(
	{
		James: ['Jacob', 'Bill', 'Lucas'],
		Johnny: ['David', 'Kyle', 'Lucas'],
		Peter: ['Lucy', 'Kyle'],
	},
	['Lucas', 'Bill']
);
//'James'
