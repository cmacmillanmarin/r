/*

──────────────────────────────────────────
──────────────────────────────────────────
MOUSEMOVE
──────────────────────────────────────────
──────────────────────────────────────────

►►►  el is optional → document element by default

S.BM(this, ['mousemove'])

this.mm = new R.MM({cb: this.mousemove, el: '#element'})

this.mm.on()

mousemove (posX, posY, event) {
    console.log(posX)
}

this.mm.off()

*/

var MM = function (o) {
    this.cb = o.cb
    this.el = R.Has(o, 'el') ? R.Select.el(o.el)[0] : document

    this.iM = R.Snif.isMobile
    this.eT = this.iM ? 'touch' : 'mouse'
    this.tick = false

    R.BM(this, ['gRaf', 'run'])

    this.raf = new R.Raf(this.run)
}

MM.prototype = {

    on: function () {
        this.l('a')
    },

    off: function () {
        this.l('r')
    },

    l: function (a) {
        R.L(this.el, a, this.eT + 'move', this.gRaf)
    },

    gRaf: function (e) {
        this.e = e
        if (this.e.cancelable) {
            this.e.preventDefault()
        }

        if (!this.tick) {
            this.tick = true
            this.raf.run()
        }
    },

    run: function () {
        var t = this.iM ? this.e.changedTouches[0] : this.e
        this.cb(t['pageX'], t['pageY'], this.e)

        this.raf.stop()
        this.tick = false
    }

}

R.MM = MM
