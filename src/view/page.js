var yo = require('yo-yo')
var navButton = require('./nav/button')
var imgs = require('../config').content

function page (navData, content) {
    var navBtns = [
        navData[0] === null ?
            '↜' :
            navData[0] === 0 ?
            navButton({ href: '/' }, '↜') :
            navButton({ href: '/' + navData[0] }, '↜'),
        navData[1] > imgs.length ?
            '↝' :
            navButton({ href: '/' + navData[1] }, '↝')
    ]
    var el = yo`<main>
        ${content}
        <nav>
            ${navBtns[0]}
            ${navBtns[1]}
        </nav>
    </main>`
    return el
}

module.exports = page
