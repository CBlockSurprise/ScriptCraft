if (__plugin.canary) {
  module.exports = require('./canary/new-potion-effect');
} else {
  module.exports = require('./bukkit/new-potion-effect');
}