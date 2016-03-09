var bkFireworkEffect = org.bukkit.FireworkEffect;

exports.type = 
			{"ball": 		bkFireworkEffect.Type.BALL,
			 "largeBall": 	bkFireworkEffect.Type.BALL_LARGE,
			 "burst":  		bkFireworkEffect.Type.BURST,
			 "creeper": 	bkFireworkEffect.Type.CREEPER,
			 "star": 		bkFireworkEffect.Type.STAR
			};

exports.setFireworkEffect = function(firework, properties) {

	var meta = firework.fireworkMeta;

	var effect = bkFireworkEffect.builder()
									.flicker(properties.flicker)
									.withColor(properties.mainColor)
									.withFade(properties.fadeColor)
									.with(properties.fireworkType)
									.trail(properties.trail)
									.build();

	meta.addEffect(effect);
	meta.setPower(properties.power);
	firework.fireworkMeta = meta;
}