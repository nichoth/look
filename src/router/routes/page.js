var yo = require('yo-yo')
var struct = require('observ-struct')
var config = require('../../config')
var view = require('../../view/section')

module.exports = function (params) {
    var index = parseInt(params.index, 10)
    return { view: view, state: struct({ index: index }) }
}
