'use strict';

var ConfigLoader = require("../");
var assert = require("assert");

var configFile = __dirname + '/test-configs/simple-app.js';
var configFileEmpty = __dirname + '/test-configs/empty.js';

describe('Config loader', function() {

    describe('Loading config', function () {

        it('should load common config without app and env', function () {
            var config = ConfigLoader.loadConfig(configFile);

            assert.deepEqual(config, {
                globalVar: 'common',
                globalCommonToOverwrite: 'common',
                objectsToExtend: {
                    overwrite: 'common',
                    commonCommon: true
                }
            });
        });

        it('should load env config', function () {
            var config = ConfigLoader.loadConfig(configFile, null, 'staging');

            assert.deepEqual(config, {
                globalVar: 'common',
                globalVarStaging: 'common-staging',
                globalStagingToOverwrite: 'common-staging',
                globalCommonToOverwrite: 'common-staging',
                objectsToExtend: {
                    overwrite: 'commonStaging',
                    commonCommon: true,
                    commonStaging: true
                }
            });
        });

        it('should load app common config', function () {
            var config = ConfigLoader.loadConfig(configFile, 'testapp');

            assert.deepEqual(config, {
                globalVar: 'common',
                appVar: 'app',
                globalCommonToOverwrite: 'app',
                objectsToExtend: {
                    overwrite: 'appCommon',
                    commonCommon: true,
                    appCommon: true
                }
            });
        });

        it('should load app and env config', function () {
            var config = ConfigLoader.loadConfig(configFile, 'testapp', 'staging');

            assert.deepEqual(config, {
                globalVar: 'common',
                appVar: 'app',
                globalCommonToOverwrite: 'app',
                globalVarStaging: 'common-staging',
                globalStagingToOverwrite: 'app-staging',
                stagingVar: 'app-staging',
                objectsToExtend: {
                    overwrite: 'appStaging',
                    commonCommon: true,
                    commonStaging: true,
                    appCommon: true,
                    appStaging: true
                }
            });
        });

        it('should load empty config', function () {
            var config = ConfigLoader.loadConfig(configFileEmpty, 'testapp', 'staging');
            assert.deepEqual(config, {});
        });

    });

});
