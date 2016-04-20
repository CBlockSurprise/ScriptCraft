if (__plugin.canary) {
  module.exports = require('./canary/spawn-reason');
} else {
  module.exports = require('./bukkit/spawn-reason');
}