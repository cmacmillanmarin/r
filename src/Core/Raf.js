/*

──────────────────────────────────────────
──────────────────────────────────────────
RAF
──────────────────────────────────────────
──────────────────────────────────────────

this.raf = new R.Raf(this.loop)

this.raf.run()
this.raf.stop()

loop (elapsed) {
    console.log(elapsed)
}

*/

R.RafId = 0

var Raf = function (c) {
    this.cb = c
    this.active = false

    this.c = this

    this.id = R.RafId
    R.RafId++

    R.BM(this, ['loop'])
}

Raf.prototype = {

    run: function (tabT) {
        if (tabT) {
            this.sT += tabT
        } else {
            R.Tab.add(this.id, this.c)
            this.sT = 0
        }
        this.gR()
        this.active = true
    },

    stop: function (tab) {
        this.active = false
        cancelAnimationFrame(this.raf)
        if (!tab) {
            R.Tab.remove(this.id)
        }
    },

    gR: function () {
        this.raf = requestAnimationFrame(this.loop)
    },

    loop: function (n) {
        this.time(n)

        if (this.active) {
            this.gR()
        }
    },

    time: function (n) {
        if (!this.sT) this.sT = n
        var elapsed = n - this.sT

        this.cb(elapsed, this.id)
    }

}

R.Raf = Raf
