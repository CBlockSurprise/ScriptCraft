
exports.writeFile = function(filename, obj) {

	var mc_path = java.lang.System.getenv("MC_PATH");


	var writer = new java.io.PrintWriter(mc_path + "/plugin_data/" + filename, "UTF-8");


	writer.println(JSON.stringify(obj));
	writer.close();

}


exports.loadFile = function(filename) {
	var mc_path = java.lang.System.getenv("MC_PATH");

	var path = java.nio.file.Paths.get(mc_path + "/plugin_data/" + filename);

	var reader = java.nio.file.Files.readAllLines(path);

	var data = new java.lang.String(reader);

	var result = JSON.parse(data);

	return result[0];
}