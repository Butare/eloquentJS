/*
 * Javascript classes are constructor functions with a prototype property. 
 */
class Rabbit {
  constructor(type) {
  	this.type = type;
  }

  speak(line) {
  	console.log(`The ${this.type} rabbit says '${line}'`);
  }

}

// class invocation
let killerRabbit = new Rabbit('killer'); // killer rabbit type
let blackRabbit = new Rabbit('black'); // black rabbit type.

killerRabbit.speak('they call me killer ');
// output: The killer rabbit says they call me killer.

blackRabbit.speak('Black is the color');
// output: The black rabbit says Black is the color.


