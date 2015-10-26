var bkDamageCause = org.bukkit.event.entity.EntityDamageEvent.DamageCause;

var damageCauses = bkDamageCause.values();

for (var i = 0; i < damageCauses.length; i++) {
	var name = (''+damageCauses[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = damageCauses[i];
}