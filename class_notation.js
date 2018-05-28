/*
 * Javascript classes are constructor functions with a prototype property. 
 *
 * the 'class' keyword starts a class declaration, which allows us to define a constructor
 * and a set of methods all in a single place.
 * any number of methods may be written inside the declaration's curly braces.
 *
 * Note: Class declarations currently (May,2018) allow only methods-- properties that hold functions
 * 	 to be added to the prototype.
*/
class Rabbit {
  constructor(type) {
  	this.type = type;
  }

  speak(line) {
  	console.log(`The ${this.type} rabbit says '${line}'`);
  }

}

// object creation.
let killerRabbit = new Rabbit('killer'); // killer rabbit type
let blackRabbit = new Rabbit('black'); // black rabbit type.

killerRabbit.speak('they call me killer ');
// output: The killer rabbit says they call me killer.

blackRabbit.speak('Black is the color');
// output: The black rabbit says Black is the color.


