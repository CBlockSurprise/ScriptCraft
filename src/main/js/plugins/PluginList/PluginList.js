load("scriptcraft/modules/bukkit/master.js");

exports.plugins = function() {
    var path = java.lang.System.getenv("MC_PATH");
    var dir = new java.io.File(path);
    var filesList = dir.listFiles();
    var pluginList = [];
    for (var child in filesList) {
        if (!filesList[child].isDirectory()) {
            var name = filesList[child].getName();
            var split = name.split(".");
            pluginList.push(" " + split[0]);
        }
    }
    echo("Plugins: ".aqua() + pluginList.toString().white());
};