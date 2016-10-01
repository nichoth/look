var Routes = require('routes')
var onRoute = require('route-event')
var struct = require('observ-struct')
var observ = require('observ')
var paths = require('./routes')
var _ = require('../util')

module.exports = function Router () {
    var routeState = struct({
        state: observ(null),
        view: observ(null)
    })

    var router = Routes()
    _.forEach(paths(), (fn, path) => router.addRoute(path, fn))

    onRoute((path) => {
        var m = router.match(path)
        try {
            var rt = m.fn(m.params)
            routeState.set({
                state: rt.state,
                view: rt.view
            })
        }
        catch (err) {
            console.log('not found', err)
        }
    })

    return routeState
}
