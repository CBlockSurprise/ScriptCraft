var bkEntity = org.bukkit.entity;

var entitySubinterfaces = [
	"Ageable", "Ambient", "Animals", "ArmorStand", "Arrow", "Bat", "Blaze", "Boat", "CaveSpider", "Chicken", 
	"CommandMinecart", "ComplexEntityPart", "ComplexLivingEntity", "Cow", "Creature", "Creeper", "Damageable", 
	"Egg", "EnderCrystal", "EnderDragon", "EnderDragonPart", "Enderman", "Endermite", "EnderPearl", "EnderSignal", 
	"ExperienceOrb", "Explosive", "ExplosiveMinecart", "FallingBlock", "FallingSand", "Fireball", "Firework", 
	"Fish", "FishHook", "Flying", "Ghast", "Giant", "Golem", "Guardian", "Hanging", "HopperMinecart", "Horse", 
	"HumanEntity", "IronGolem", "Item", "ItemFrame", "LargeFireball", "LeashHitch", "LightningStrike", 
	"LivingEntity", "MagmaCube", "Minecart", "Monster", "MushroomCow", "NPC", "Ocelot", "Painting", "Pig", "PigZombie", 
	"Player", "PoweredMinecart", "PoweredMinecart", "Projectile", "Rabbit", "RideableMinecart", "Sheep", "Silverfish", 
	"Skeleton", "Slime", "SmallFireball", "Snowball", "Snowman", "SpawnerMinecart", "Spider", "Squid", "StorageMinecart", 
	"StorageMinecart", "ThrownExpBottle", "ThrownPotion", "TNTPrimed", "Vehicle", "Villager", "WaterMob", "Weather", 
	"Witch", "Wither", "WitherSkull", "Wolf", "Zombie"];

for (var i = 0; i < entitySubinterfaces.length; i++) {
	var name = firstToLowerCase(entitySubinterfaces[i]);
	exports[name] = bkEntity[entitySubinterfaces[i]];
}

function firstToLowerCase(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1);
}