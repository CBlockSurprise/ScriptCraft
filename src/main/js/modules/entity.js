if (__plugin.canary) {
  module.exports = require('./canary/entity');
} else {
  module.exports = require('./bukkit/entity');
}