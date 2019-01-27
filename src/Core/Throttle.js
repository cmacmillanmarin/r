/*

──────────────────────────────────────────
──────────────────────────────────────────
THROTTLE
──────────────────────────────────────────
──────────────────────────────────────────

const throttle = new R.Throttle({
    delay: 200,
    onlyAtEnd: true,
    cb: callback
})

throttle.run()

*/

R.Throttle = function (o) {
    this.del = o.delay
    this.onlyAtEnd = o.onlyAtEnd
    this.cb = o.cb
    this.last
    this.t
}

R.Throttle.prototype = {

    run: function () {
        var self = this
        var firstTime = true
        var now = Date.now()
        if ((this.last && now < this.last + this.del) || firstTime) {
            firstTime = false
            clearTimeout(this.t)
            this.t = setTimeout(function () {
                self.last = now
                self.cb()
            }, this.del)
        } else {
            this.last = now
            if (!this.onlyAtEnd) {
                firstTime = false
                this.cb()
            }
        }
    }

}
