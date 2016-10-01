module.exports = function () {
    return {
        '/': require('./root'),
        '/:index': require('./page')
    }
}
