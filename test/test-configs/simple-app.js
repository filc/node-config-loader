module.exports = {
    common: {
        common: {
            globalVar: 'common',
            globalCommonToOverwrite: 'common',
            objectsToExtend: {
                overwrite: 'common',
                commonCommon: true
            }
        },
        staging: {
            globalVarStaging: 'common-staging',
            globalStagingToOverwrite: 'common-staging',
            globalCommonToOverwrite: 'common-staging',
            objectsToExtend: {
                overwrite: 'commonStaging',
                commonStaging: true
            }
        }
    },
    testapp: {
        common: {
            appVar: 'app',
            globalCommonToOverwrite: 'app',
            objectsToExtend: {
                overwrite: 'appCommon',
                appCommon: true
            }
        },
        staging: {
            stagingVar: 'app-staging',
            globalStagingToOverwrite: 'app-staging',
            objectsToExtend: {
                overwrite: 'appStaging',
                appStaging: true
            }
        }
    }
};