/*

──────────────────────────────────────────
──────────────────────────────────────────
INDEX
──────────────────────────────────────────
──────────────────────────────────────────

const elementLiIndex = R.Index.list(liElement)
const elementClassIndex = R.Index.class(elementWithClass, className)

*/

R.Index = {
    index: function (n, el) {
        var elL = el.length
        for (var i = 0; i < elL; i++) {
            if (n === el[i]) {
                return i
            }
        }
        return -1
    },

    list: function (n) {
        var el = n.parentNode.children
        return this.index(n, el)
    },

    class: function (n, cN) {
        var el = R.G.class(cN)
        return this.index(n, el)
    }
}
