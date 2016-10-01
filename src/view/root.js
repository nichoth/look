var yo = require('yo-yo')
var tile = require('./tile')
var page = require('./page')

module.exports = function (data) {
    var nav = [null, '1']
    return yo`<div class="root">
        ${page( nav, tile('root view') )}
    </div>`
}
