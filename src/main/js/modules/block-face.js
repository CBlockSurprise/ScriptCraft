if (__plugin.canary) {
  module.exports = require('./canary/block-face');
} else {
  module.exports = require('./bukkit/block-face');
}