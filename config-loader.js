var _ = require('underscore');
_.mixin(require('underscore.nested'));

function loadConfig(configFile, app, env) {
    var config = require(configFile);
    var commonAppCommon, commonAppEnv, appCommon, appEnv;

    commonAppCommon = _.clone(_.getNested(config, 'common.common')) || {};
    commonAppEnv = env ? _.clone(_.getNested(config, 'common.' + env, {})) : {};

    appCommon = app ? _.clone(_.getNested(config, app + '.common', {})) : {};
    appEnv = app && env ? _.clone(_.getNested(config, app + '.' + env, {})) : {};

    return _.extend(commonAppCommon, commonAppEnv, appCommon, appEnv);
}

module.exports.loadConfig = loadConfig;