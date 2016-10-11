var bkParticle = org.bukkit.Particle;

var particles = bkParticle.values();

for (var i = 0; i < particles.length; i++) {
	var name = (''+particles[i].name()).toLowerCase();
	name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
	exports[name] = particles[i];
}