
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

// transform the filtered array with map.

function map(array, transform) {
	let transformed = [];
	for (let element of array) {
		transformed.push(transform(element));
	}
	return transformed;
}


console.log(filter(SCRIPTS, script => script.living));

let filtered = filter(SCRIPTS, script => script.living);

console.log(map(filtered, key => key.name)); 
