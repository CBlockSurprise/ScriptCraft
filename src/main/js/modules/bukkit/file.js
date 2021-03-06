exports.write = function(filename, string) {
	var mc_path = java.lang.System.getenv("MC_PATH");
	var dataDir = new java.io.File(mc_path + "/plugin_data");
	if (dataDir.list().length > 99) {
		console.error("Too many files! Limit is 100 per server.");
		return;
	}
	var path = java.nio.file.Paths.get(mc_path + "/plugin_data/" + filename);
	var outStream = new java.io.FileOutputStream(path, false);
	var writer = new java.io.PrintWriter(outStream);
	writer.println(string);
	writer.close();
}

exports.load = function(filename) {
	var mc_path = java.lang.System.getenv("MC_PATH");
	var path = java.nio.file.Paths.get(mc_path + "/plugin_data/" + filename);
	var reader = java.nio.file.Files.readAllLines(path);
	var data = new java.lang.String(reader);
	return data;
}