if (__plugin.canary) {
  module.exports = require('./canary/item-flag');
} else {
  module.exports = require('./bukkit/item-flag');
}