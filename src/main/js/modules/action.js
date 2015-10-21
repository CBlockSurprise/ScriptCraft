if (__plugin.canary) {
  module.exports = require('./canary/action');
} else {
  module.exports = require('./bukkit/action');
}