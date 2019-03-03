const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
      new LoadablePlugin()
    );

    return config;
}
