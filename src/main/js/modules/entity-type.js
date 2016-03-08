if (__plugin.canary) {
  module.exports = require('./canary/entity-type');
} else {
  module.exports = require('./bukkit/entity-type');
}