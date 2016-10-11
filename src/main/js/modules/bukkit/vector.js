var bkVector = org.bukkit.util.Vector;

var methods = bkVector.class.getDeclaredMethods();

for (var i in methods) {
  var methodName = methods[i].getName();
  var params = methods[i].getParameterTypes();
  var numParams = params.length;
  var func = methods[i];
  exports[methodName] = function(idx) {
    return function() {
      var args = [];
      for (var index in arguments) {
        args.push(arguments[index])
      }

      var argStrings = args.map(function(val, key) {
        return 'args['+key+']';
      })

      return eval('org.bukkit.util.Vector.'+methods[idx].getName()+'('+argStrings.join(', ')+')');
    }
    
  }(i);
  
}

// return a new bukkit Vector
function vector() {
	if (arguments.length == 0) {
		return new bkVector();
	} else if (arguments.length == 3) {
		return new bkVector(arguments[0], arguments[1], arguments[2]);
	} else {
		console.log("Incorrect number of arguments to vector constructor.");
	}
}

module.exports = vector;