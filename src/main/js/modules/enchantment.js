if (__plugin.canary) {
  module.exports = require('./canary/enchantment');
} else {
  module.exports = require('./bukkit/enchantment');
}