
const SCRIPTS = require('./scripts');

// filter an array of objects based on the passed function.
// creates new array for the selected objects.
function filter(array, test) {
	let passed = [];
	for ( let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));
