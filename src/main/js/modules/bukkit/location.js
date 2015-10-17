// return a new bukkit Location
function location() {
	var bkLocation = org.bukkit.Location;
	if (arguments.length == 4) {
		return new bkLocation(arguments[0], arguments[1], arguments[2], arguments[3]);
	} else if (arguments.length == 6) {
		return new bkLocation(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	} else {
		console.log("Incorrect number of arguments to location constructor.");
	}
}

module.exports = location;