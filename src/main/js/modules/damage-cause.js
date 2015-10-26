if (__plugin.canary) {
  module.exports = require('./canary/damage-cause');
} else {
  module.exports = require('./bukkit/damage-cause');
}