var bkMaterial = Packages.org.bukkit.Material;

var materials = bkMaterial.values();

for (var i = 0; i < materials.length; i++) {
	var name = (''+materials[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = materials[i];
}