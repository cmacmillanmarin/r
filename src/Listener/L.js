/*

──────────────────────────────────────────
──────────────────────────────────────────
LISTENER
──────────────────────────────────────────
──────────────────────────────────────────

ADD
───

R.L(element, 'a', 'click', callback)

REMOVE
──────

R.L(element, 'r', 'click', callback)

EXAMPLE
───────

listen (action) {
    R.L(element, action, 'click', callback)
}

this.listen('a')
this.listen('r')

*/

R.L = function (el, a, t, cb) {
    var d = document
    var el = R.Select.el(el)
    var elL = el.length
    var type
    var pE = ['touchmove', 'mousemove', 'scroll', 'mouseWheel', 'touchstart']
    var o = pE.indexOf(t) === -1 ? false : {passive: false}

    if (t === pE[3]) {
        type = 'onwheel' in d ? 'wheel' : R.Is.def(d.onmousewheel) ? 'mousewheel' : 'DOMMouseScroll'
    } else if (t === 'focusOut') {
        type = R.Snif.isFirefox ? 'blur' : 'focusout'
    } else {
        type = t
    }

    var action = a === 'a' ? 'add' : 'remove'
    for (var i = 0; i < elL; i++) {
        el[i][action + 'EventListener'](type, cb, o)
    }
}
