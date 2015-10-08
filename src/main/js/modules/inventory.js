if (__plugin.canary) {
  module.exports = require('./canary/inventory');
} else {
  module.exports = require('./bukkit/inventory');
}
