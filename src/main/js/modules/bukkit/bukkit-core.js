var bkBukkit = org.bukkit.Bukkit;

// broadcast message
exports.broadcastMessage = function(msg) {
	bkBukkit.broadcastMessage(msg);
}


// execute console command
exports.consoleCommand = function(cmd) {
	bkBukkit.dispatchCommand(server.consoleSender, cmd);
}