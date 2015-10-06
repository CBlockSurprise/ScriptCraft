if (__plugin.canary) {
  module.exports = require('./canary/scoreboard-module');
} else {
  module.exports = require('./bukkit/scoreboard-module');
}
