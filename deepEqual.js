// deeply checks if two objects are equal (i.e by; values and properties)
function deepEqual(obj1, obj2) {
	let flag = false;
	for (let key in obj1) {
		if (!(obj2.hasOwnProperty(key))|| !(obj1[key] == obj2[key])){
		 	 flag = false;
		 	  break;
		}
		else 
	    	    flag = true;
	}
	return flag;
}
