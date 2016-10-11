var bkBukkit = org.bukkit.Bukkit;

var methods = bkBukkit.class.getDeclaredMethods();

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

      return eval('org.bukkit.Bukkit.'+methods[idx].getName()+'('+argStrings.join(', ')+')');
    }
    
  }(i);
  
}