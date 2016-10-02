var yo = require('yo-yo')
var Router = require('./router')

module.exports = function app () {
    function render (content) {
        return yo`<div class="app">
            ${content}
        </div>`
    }
    var el = render()

    var route = Router()
    route(function onChange (rt) {
        console.log('update', rt)
        yo.update(el, render(rt.view(rt.state)))
    })

    return el
}

