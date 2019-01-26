/*

──────────────────────────────────────────
──────────────────────────────────────────
DELAY
──────────────────────────────────────────
──────────────────────────────────────────

const delay = new R.Delay(_ => {
    this.on()
}, 3500)

delay.run()
delay.stop()

*/

R.Delay = function (cb, d) {
    this.cb = cb
    this.d = d

    R.BM(this, ['loop'])

    this.raf = new R.Raf(this.loop)
}

R.Delay.prototype = {

    run: function () {
        this.raf.run()
    },

    stop: function () {
        this.raf.stop()
    },

    loop: function (t) {
        var progress = this.d > 0 ? Math.min(t / this.d, 1) : 1

        if (progress + 0.0000001 >= 1) {
            this.stop()
            this.cb()
        }
    }

}
