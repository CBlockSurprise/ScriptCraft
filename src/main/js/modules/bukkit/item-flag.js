var bkItemFlag = org.bukkit.inventory.ItemFlag;

var itemFlags = bkItemFlag.values();

for (var i = 0; i < itemFlags.length; i++) {
	var name = (''+itemFlags[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = itemFlags[i];
}