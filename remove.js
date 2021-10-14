// All C

// const allContruct = (target, wordBank) => {
// 	if(target === "") return [[]];
// 	const result = [];

// 	for(let word of wordBank) {
// 		if(target.indexOf(word) === 0) {
// 			const suffix = target.slice(word.length);
// 			const suffixWay = allContruct(suffix, wordBank);

// 			const combination = suffixWay.map(sub => [word, ...sub]);

// 			result.push(...combination);
// 		}
// 	}

// 	return result;
// }

const allContruct = (target, wordBank) => {
	const table = new Array(target.length + 1)
	             .fill()
	             .map(() => []);
	table[0] = [[]]; 

	for(let i = 0; i <= target.length; i++) {
		for(let word of wordBank) {
			if(target.slice(i, i + word.length) === word) {
				const suffix = target.slice(word.length);
				const combination = table[i].map(way => [word, ...way]);

				table[i + word.length].push(...combination);
			}
		}
	}
	return table[target.length];
}

console.log(allContruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(
// 	allContruct("eeèeeeeeeeeeeeeeeeeeeeeeeeeee", [
// 		"e",
// 		"ee",
// 		"eee",
// 		"eeee",
// 		"eeeee",
// 		"eeeee",
// 	])
// );