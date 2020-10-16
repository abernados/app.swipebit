process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    productionSourceMap: false,
    parallel: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.swipebitnetwork.com',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false
            }
        }
    }
};