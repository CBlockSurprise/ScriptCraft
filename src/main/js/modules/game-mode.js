if (__plugin.canary) {
  module.exports = require('./canary/game-mode');
} else {
  module.exports = require('./bukkit/game-mode');
}