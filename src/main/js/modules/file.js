if (__plugin.canary) {
  module.exports = require('./canary/file');
} else {
  module.exports = require('./bukkit/file');
}