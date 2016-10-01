var yo = require('yo-yo')
var h = yo.createElement
var xtend = require('xtend')

module.exports = function (props, content) {
    var ps = xtend(props, { class: 'nav-button' })
    return h('a', ps, [content])
}
