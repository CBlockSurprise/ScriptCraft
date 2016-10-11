if (__plugin.canary) {
  module.exports = require('./canary/equipment-slot');
} else {
  module.exports = require('./bukkit/equipment-slot');
}