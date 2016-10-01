var yo = require('yo-yo')
var tile = require('./tile')
var page = require('./page')
var config = require('../config')

module.exports = function (data) {
    var index = data.index
    var nav = [index - 1, index + 1]
    var img = yo`<img src="${config.content[index - 1].path}" alt="test" />`
    return yo`<div class="section">
        ${page( nav, tile(img) )}
    </div>`
}

