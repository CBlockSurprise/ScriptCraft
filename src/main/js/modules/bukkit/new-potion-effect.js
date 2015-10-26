var bkPotionEffectType = org.bukkit.potion.PotionEffectType;
var bkPotionEffect = org.bukkit.potion.PotionEffect;

// create a new potion effect of the given type with duration "dur" (seconds) and strength "str" (effect level)
function newPotionEffect(type, dur, str) {
	var effectType;
	switch (type.toUpperCase()) {
		case "ABSORPTION":
			effectType = bkPotionEffectType.ABSORPTION;
			break;
		case "BLINDNESS":
			effectType = bkPotionEffectType.BLINDNESS;
			break;
		case "CONFUSION":
			effectType = bkPotionEffectType.CONFUSION;
			break;
		case "DAMAGE_RESISTANCE":
			effectType = bkPotionEffectType.DAMAGE_RESISTANCE;
			break;
		case "FAST_DIGGING":
			effectType = bkPotionEffectType.FAST_DIGGING;
			break;
		case "FIRE_RESISTANCE":
			effectType = bkPotionEffectType.FIRE_RESISTANCE;
			break;
		case "HARM":
			effectType = bkPotionEffectType.HARM;
			break;
		case "HEAL":
			effectType = bkPotionEffectType.HEAL;
			break;
		case "HEALTH_BOOST":
			effectType = bkPotionEffectType.HEALTH_BOOST;
			break;
		case "HUNGER":
			effectType = bkPotionEffectType.HUNGER;
			break;
		case "INCREASE_DAMAGE":
			effectType = bkPotionEffectType.INCREASE_DAMAGE;
			break;
		case "INVISIBILITY":
			effectType = bkPotionEffectType.INVISIBILITY;
			break;
		case "JUMP":
			effectType = bkPotionEffectType.JUMP;
			break;
		case "NIGHT_VISION":
			effectType = bkPotionEffectType.NIGHT_VISION;
			break;
		case "POISON":
			effectType = bkPotionEffectType.POISON;
			break;
		case "REGENERATION":
			effectType = bkPotionEffectType.REGENERATION;
			break;
		case "SATURATION":
			effectType = bkPotionEffectType.SATURATION;
			break;
		case "SLOW":
			effectType = bkPotionEffectType.SLOW;
			break;
		case "SLOW_DIGGING":
			effectType = bkPotionEffectType.SLOW_DIGGING;
			break;
		case "SPEED":
			effectType = bkPotionEffectType.SPEED;
			break;
		case "WATER_BREATHING":
			effectType = bkPotionEffectType.WATER_BREATHING;
			break;
		case "WEAKNESS":
			effectType = bkPotionEffectType.WEAKNESS;
			break;
		case "WITHER":
			effectType = bkPotionEffectType.WITHER;
			break;
		default:
			console.log("must be a valid PotionEffectType: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html");
	}
	return new bkPotionEffect(effectType, dur*20, str-1); // dur (seconds) * 20 (ticks/sec)
}

module.exports = newPotionEffect;