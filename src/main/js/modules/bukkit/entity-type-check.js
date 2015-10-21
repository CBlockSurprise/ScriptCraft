var bkEntityType = org.bukkit.entity.EntityType;

function isPlayer(entity) {
	return entity.type.equals(bkEntityType.PLAYER);
}

function isSnowball(entity) {
	return entity.type.equals(bkEntityType.SNOWBALL);
}

function isItem(entity) {
	return entity.type.equals(bkEntityType.DROPPED_ITEM);
}