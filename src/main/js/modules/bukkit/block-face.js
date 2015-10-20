var bkBlockFace = org.bukkit.block.BlockFace;

var blockFaces = bkBlockFace.values();

for (var i = 0; i < blockFaces.length; i++) {
	var name = (''+blockFaces[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = blockFaces[i];
}