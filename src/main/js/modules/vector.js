if (__plugin.canary) {
  module.exports = require('./canary/vector');
} else {
  module.exports = require('./bukkit/vector');
}