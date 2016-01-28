load("scriptcraft/modules/bukkit/master.js");

exports.plugins = function() {
    var curDir = java.lang.System.getProperty("user.dir");
    var path = "/home/" + curDir.split("/")[5] + "/server/scriptcraft/plugins";
    var dir = new java.io.File(path);
    var filesList = dir.listFiles();
    var pluginList = [];
    for (var child in filesList) {
        if (filesList[child].isDirectory()) {
            var name = filesList[child].getName();
            var drone = new java.lang.String("drone");
            var list = new java.lang.String("PluginList");
            if (!(name.equals(drone) || name.equals(list))) {
                pluginList.push(" " + name);
            }
        }
    }
    echo("Plugins: ".aqua() + pluginList.toString().white());
};