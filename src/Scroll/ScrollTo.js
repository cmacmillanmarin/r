/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TO
──────────────────────────────────────────
──────────────────────────────────────────

R.ScrollTo({
    dest: 1000,
    d: 200,
    e: '3o',
    cb: afterTop
})

*/

R.ScrollTo = function (o) {
    var d = document
    var scrollNode = d.scrollingElement ? d.scrollingElement : R.Dom.body // >= Chrome v.61
    var scrollable = R.Snif.isFirefox || R.Snif.isIE ? d.documentElement : scrollNode
    var start = pageYOffset
    var end = o.dest
    var r = 1000
    var a = new R.M({d: o.d, e: o.e, update: up, cb: gCb})

    if (start === end) {
        gCb()
    } else {
        R.WTP.on()
        a.play()
    }

    function up (v) {
        scrollable.scrollTop = Math.round(R.Lerp(start, end, v.progress) * r) / r
    }

    function gCb () {
        R.WTP.off()

        if (o.cb) {
            o.cb()
        }
    }
}
