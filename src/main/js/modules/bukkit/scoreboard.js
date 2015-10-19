var bkScoreboard = org.bukkit.scoreboard.Scoreboard;
var bkBukkit = org.bukkit.Bukkit;
var bkDisplaySlot = org.bukkit.scoreboard.DisplaySlot;

// displayName, objectives, and displaySlots are arrays of strings of length 1-3 (lengths must match)
exports.newSB = function(displayNames, objectives, displaySlots) {
	var sb = bkBukkit.getScoreboardManager().getNewScoreboard();
    for (var i = 0; i < displayNames.length; i++) {
	    var obj = sb.registerNewObjective(objectives[i], "criteria");
	    obj.setDisplayName(displayNames[i]);
        if (displaySlots[i].equals("sidebar")) {
            obj.setDisplaySlot(bkDisplaySlot.SIDEBAR);
        } else if (displaySlots[i].equals("player_list")) {
            obj.setDisplaySlot(bkDisplaySlot.PLAYER_LIST);
        } else if (displaySlots[i].equals("below_name")) {
            obj.setDisplaySlot(bkDisplaySlot.BELOW_NAME);
        } else {
            console.log("display slot must be 'sidebar', 'below_name', or 'player_list'");
        }
        
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
    var slot;
    if (displaySlot.equals("sidebar")) {
        slot = bkDisplaySlot.SIDEBAR;
    } else if (displaySlot.equals("player_list")) {
        slot = bkDisplaySlot.PLAYER_LIST;
    } else if (displaySlot.equals("below_name")) {
        slot = bkDisplaySlot.BELOW_NAME;
    } else {
        console.log("display slot must be 'sidebar', 'below_name', or 'player_list'");
    }
	scoreboard.getObjective(slot).getScore(player).setScore(score);
}

exports.clearSB = function(scoreboard) {
        scoreboard.clearSlot(bkDisplaySlot.SIDEBAR);
        scoreboard.clearSlot(bkDisplaySlot.PLAYER_LIST);
        scoreboard.clearSlot(bkDisplaySlot.BELOW_NAME);
}
