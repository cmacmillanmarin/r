/*

──────────────────────────────────────────
──────────────────────────────────────────
RESIZE & ORIENTATION
──────────────────────────────────────────
──────────────────────────────────────────

S.BM(this, ['resize'])

this.ro = new R.RO({cb: this.resize, throttleDelay: 100})

this.ro.on()

resize (event) {
    console.log(event)
}

this.ro.off()

*/

var RO = function (o) {
    this.cb = o.cb

    this.eT = R.Snif.isMobile ? 'orientationchange' : 'resize'
    this.tick = false

    R.BM(this, ['gT', 'gRaf', 'run'])

    this.t = new R.Throttle({
        delay: o.throttleDelay,
        onlyAtEnd: true,
        cb: this.gRaf
    })
    this.raf = new R.Raf(this.run)
}

RO.prototype = {

    on: function () {
        this.l('a')
    },

    off: function () {
        this.l('r')
    },

    l: function (a) {
        R.L(window, a, this.eT, this.gT)
    },

    gT: function (e) {
        this.e = e
        this.t.run()
    },

    gRaf: function () {
        if (!this.tick) {
            this.tick = true
            this.raf.run()
        }
    },

    run: function () {
        this.cb(this.e)

        this.raf.stop()
        this.tick = false
    }

}

R.RO = RO
