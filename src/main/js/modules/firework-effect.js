if (__plugin.canary) {
  module.exports = require('./canary/firework-effect');
} else {
  module.exports = require('./bukkit/firework-effect');
}