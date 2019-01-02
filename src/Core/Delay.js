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
}

R.Delay.prototype = {

    run: function () {
        this.raf = requestAnimationFrame(this.loop)
    },

    stop: function () {
        cancelAnimationFrame(this.raf)
    },

    tab: function (v) {
        this.start += v
    },

    loop: function (now) {
        if (!this.start) this.start = now
        var progress = this.d > 0 ? Math.min((now - this.start) / this.d, 1) : 1

        if (progress + 0.0000001 < 1) {
            this.raf = requestAnimationFrame(this.loop)
        } else if (this.cb) {
            this.cb()
        }
    }

}
