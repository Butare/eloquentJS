/**
 * This is the detailed implementation of Array.prototype.reduce()
 *
 * @param {array} array - A list of elements
 * @param {combine} function - What action should be taken.
 * @param {start} start - a starting value. 
 */

function reduce(array, combine, start) {
	let current = start;
	for ( let element of array) {
		current = combine(current, element);
	}
	return  current;
}


console.log(reduce([10, 20, 30, 40], (a, b) => a + b, 0));
// output: 100
