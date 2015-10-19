if (__plugin.canary) {
  module.exports = require('./canary/scoreboard');
} else {
  module.exports = require('./bukkit/scoreboard');
}