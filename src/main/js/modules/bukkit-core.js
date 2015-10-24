if (__plugin.canary) {
  console.log("bukkit module cannot be used with CanaryMod server");
} else {
  module.exports = require('./bukkit/bukkit-core');
}