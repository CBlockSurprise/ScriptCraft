if (__plugin.canary) {
  module.exports = require('./canary/material');
} else {
  module.exports = require('./bukkit/material');
}