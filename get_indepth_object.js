// generalized function for go deep into an object
function break_object(obj){
  var result = null;
      if (obj instanceof Array){
            for (var i = 0; i < obj.length; i++) {
                   result = break_object(obj[i]);
            	    if (result) break;
          	  }
      }else {
    	    for (var keys in obj) {
              console.log(keys + " : "+ obj[keys]);
                if (obj[keys] instanceof Object || obj[keys] instanceof Array){
                    result = break_object(obj[keys]);
                        if (result) break;
                  }
        	}
            }
        return result;
  }
