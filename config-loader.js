var deepExtend = require('deep-extend');

var _ = require('underscore');
_.mixin(require('underscore.nested'));

function loadConfig(configFile, app, env) {
    var config = require(configFile);

    return deepExtend(
        _.clone(_.getNested(config, 'common.common', {})),
        _.clone(_.getNested(config, 'common.' + env, {})),
        _.clone(_.getNested(config, app + '.common', {})),
        _.clone(_.getNested(config, app + '.' + env, {}))
    );
}

module.exports.loadConfig = loadConfig;