// "Do something" based on the passed action
function repeat(n, action) {
	for ( let i = 0; i < n; i++){
		action(i);
	}
}

// create an action on the spot
let labels = [];
repeat(5, i => {
	labels.push(`Unit ${i + 1}`)
});
console.log(labels); // output
 
