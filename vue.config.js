process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    devServer: {
        host: 'app.swipebit.test',
        port: 8080,
        https: true
    }
    // devServer: {
    //     proxy: 'http://app.swipebit.test:8080'
    // },
    // runtimeCompiler: true
};