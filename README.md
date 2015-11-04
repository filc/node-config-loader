# node-config-loader

This package is used for loading configs for applications. It handles multiple environments as well.

## Installation

npm install app-config-loader

## Get started

Our test config file looks like this:

```
module.exports = {
    common: {
        common: {
            globalVar: 'common',
            globalCommonToOverwrite: 'common'
        },
        staging: {
            globalVarStaging: 'common-staging',
            globalStagingToOverwrite: 'common-staging',
            globalCommonToOverwrite: 'common-staging'
        }
    },
    testapp: {
        common: {
            appVar: 'app',
            globalCommonToOverwrite: 'app'
        },
        staging: {
            stagingVar: 'app-staging',
            globalStagingToOverwrite: 'app-staging'
        }
    }
};
```

And we can load it like this:

```
var ConfigLoader = require('app-config-loader');
var config = ConfigLoader.loadConfig(configFile, 'testapp', 'staging');
```