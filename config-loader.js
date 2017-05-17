var _ = require('lodash');

function loadConfig(configFile, app, env) {
    var config = require(configFile);

    return _.merge({},
        _.clone(_.get(config, 'common.common', {})),
        _.clone(_.get(config, 'common.' + env, {})),
        _.clone(_.get(config, app + '.common', {})),
        _.clone(_.get(config, app + '.' + env, {}))
    );
}

module.exports.loadConfig = loadConfig;
