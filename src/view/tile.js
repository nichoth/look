var yo = require('yo-yo')

module.exports = function (content) {
    var el = yo`<div class="tile">
        ${content}
    </div>`

    return el
}
