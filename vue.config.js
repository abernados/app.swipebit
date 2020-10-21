process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    // devServer: {
    //     proxy: 'http://app.swipebit.test:8080'
    // },
    // runtimeCompiler: true
    devServer: {
        host: 'app.swipebit.test',
        port: 8080,
        https: true
    },
    /* eslint-disable  */

    pwa: {
        name: 'SwipeBit',
        themeColor: '#043B59',
        msTileColor: '#043B59',
        manifestOptions: {
            background_color: '#043B59'
        }
    }
};