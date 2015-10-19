if (__plugin.canary) {
  module.exports = require('./canary/dye-color');
} else {
  module.exports = require('./bukkit/dye-color');
}