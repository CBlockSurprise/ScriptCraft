if (__plugin.canary) {
  module.exports = require('./canary/entity-type-check');
} else {
  module.exports = require('./bukkit/entity-type-check');
}