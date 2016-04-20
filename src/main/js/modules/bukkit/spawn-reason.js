var bkSpawnReason = org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason

var types = bkSpawnReason.values();

for (var i = 0; i < types.length; i++) {
	var name = (''+types[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = types[i];
}