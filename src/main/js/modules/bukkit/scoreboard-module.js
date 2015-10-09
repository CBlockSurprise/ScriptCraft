var bkScoreboard = org.bukkit.scoreboard.Scoreboard;
var bkBukkit = org.bukkit.Bukkit;
var bkDisplaySlot = org.bukkit.scoreboard.DisplaySlot;

// displayName, objectives, and displaySlots are arrays of strings of length 1-3 (lengths must match)
exports.newSB = function(displayNames, objectives, displaySlots) {
	var sb = bkBukkit.getScoreboardManager().getNewScoreboard();
        for (var i = 0; i < displayNames.length; i++) {
	    var obj = sb.registerNewObjective(objectives[i], "criteria");
	    obj.setDisplayName(displayNames[i]);
            obj.setDisplaySlot(displaySlots[i]);
        }
	return sb;
}

exports.addTeamToSB = function(team, scoreboard) {
    return scoreboard.registerNewTeam(team);
}

exports.addPlayerToTeam = function(player, team) {
    team.addPlayer(player);
}

exports.getTeam = function(teamName, scoreboard) {
    return scoreboard.getTeam(teamName);
}

exports.setTeamPrefix = function(team, prefix) {
    team.setPrefix(prefix);
}

exports.setTeamDisplayName = function(team, displayName) {
    team.setDisplayName(displayName);
}

exports.setSB = function(player, scoreboard) {
	player.setScoreboard(scoreboard);
}

exports.setPlayerScore = function (player, scoreboard, displaySlot, score) {
	scoreboard.getObjective(displaySlot).getScore(player).setScore(score);
}

exports.clearSB = function(scoreboard) {
        scoreboard.clearSlot(bkDisplaySlot.SIDEBAR);
        scoreboard.clearSlot(bkDisplaySlot.PLAYER_LIST);
        scoreboard.clearSlot(bkDisplaySlot.BELOW_NAME);
}
