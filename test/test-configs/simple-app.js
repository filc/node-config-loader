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