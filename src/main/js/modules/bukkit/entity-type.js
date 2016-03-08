var bkEntityType = org.bukkit.entity.EntityType;

var types = bkEntityType.values();

for (var i = 0; i < types.length; i++) {
	var name = (''+types[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = types[i];
}