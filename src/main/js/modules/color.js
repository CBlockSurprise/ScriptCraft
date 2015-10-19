if (__plugin.canary) {
  module.exports = require('./canary/color');
} else {
  module.exports = require('./bukkit/color');
}