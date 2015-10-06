var bkScoreboard = org.bukkit.scoreboard.Scoreboard;
var bkBukkit = org.bukkit.Bukkit;
var bkDisplaySlot = org.bukkit.scoreboard.DisplaySlot;

exports.newSB = function(displayName) {
	var sb = bkBukkit.getScoreboardManager().getNewScoreboard();
	var obj = sb.registerNewObjective("objective", "criteria");
	obj.setDisplayName(displayName);
	obj.setDisplaySlot(bkDisplaySlot.SIDEBAR);
	return sb;
}

exports.setSB = function(player, scoreboard) {
	player.setScoreboard(scoreboard);
}

exports.setPlayerScore = function (player, scoreboard, score) {
	scoreboard.getObjective(bkDisplaySlot.SIDEBAR).getScore(player).setScore(score);
}
