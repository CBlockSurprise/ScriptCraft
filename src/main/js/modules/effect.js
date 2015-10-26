if (__plugin.canary) {
  module.exports = require('./canary/effect');
} else {
  module.exports = require('./bukkit/effect');
}