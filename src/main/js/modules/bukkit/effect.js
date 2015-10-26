var bkEffect = org.bukkit.Effect;

var effects = bkEffect.values();

for (var i = 0; i < effects.length; i++) {
	var name = (''+effects[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = effects[i];
}