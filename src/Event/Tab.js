/*

──────────────────────────────────────────
──────────────────────────────────────────
TAB
──────────────────────────────────────────
──────────────────────────────────────────

R.Tab.add(id, context)
R.Tab.remove(id)

*/

var Tab = function () {
    this.arr = []
    this.arrL = 0
    this.pause = 0

    R.BM(this, ['change'])

    R.L(document, 'a', 'visibilitychange', this.change)
}

Tab.prototype = {

    add: function (id, cb) {
        this.arr.push([id, cb])
        this.arrL++
    },

    remove: function (id) {
        for (var i = 0; i < this.arrL; i++) {
            if (this.arr[i][0] === id) {
                this.arr.splice(i, 1)
                this.arrL--
            }
        }
    },

    change: function () {
        var now = performance.now()

        if (document.hidden) {
            this.pause = performance.now()
            for (var i = 0; i < this.arrL; i++) {
                this.arr[i][1].stop(true)
            }
        } else {
            var elapsed = now - this.pause
            for (var i = 0; i < this.arrL; i++) {
                this.arr[i][1].run(elapsed)
            }
        }
    }

}

R.Tab = new Tab()
