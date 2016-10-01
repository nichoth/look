var struct = require('observ-struct')
var view = require('../../view/root')

module.exports = function rootRoute (params) {
    console.log('root', params)
    return { view: view, state: struct({}) }
}
