if (__plugin.canary) {
  module.exports = require('./canary/particle');
} else {
  module.exports = require('./bukkit/particle');
}