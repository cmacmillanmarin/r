/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TO TOP
──────────────────────────────────────────
──────────────────────────────────────────

R.ScrollToTop({
    h: element.offsetHeight,
    cb: afterTop
})

*/

R.ScrollToTop = function (o) {
    var curr = pageYOffset
    var opts = {
        dest: 0,
        d: d(),
        e: e(),
        cb: o.cb
    }

    R.ScrollTo(opts)

    function d () {
        var coeff = R.Lerp(300, 1500, curr / o.h)

        return curr === 0 ? 0 : coeff
    }

    function e () {
        var step = 500

        if (curr <= step * 5) {
            return 'io' + Math.ceil(curr / step)
        } else {
            return 'io6'
        }
    }
}
