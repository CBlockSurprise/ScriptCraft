if (__plugin.canary) {
  module.exports = require('./canary/location');
} else {
  module.exports = require('./bukkit/location');
}
