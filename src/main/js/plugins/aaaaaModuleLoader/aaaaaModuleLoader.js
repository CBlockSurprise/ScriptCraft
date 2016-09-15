// plugins are loaded in alphabetical order
// this plugin ensures modules are loaded before attempting to load other plugins
load("scriptcraft/modules/bukkit/master.js");

// sends players "powered by MVCode" message when they log in
var onPlayerJoin = function(event) {
	var player = event.player;
	setTimeout(function() {echo(player, "Welcome!".green() + 
		" This server is powered by ".white() + "M".blue()+"V".aqua()+"C".brightgreen()+"o".yellow()+"d".gold()+"e".red());},
		500);
}
events.playerJoin(onPlayerJoin);