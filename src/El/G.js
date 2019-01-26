/*

──────────────────────────────────────────
──────────────────────────────────────────
GET ELEMENT BY
──────────────────────────────────────────
──────────────────────────────────────────

const content = R.G.id('content')
const btn = R.G.class('btn')
const span = R.G.tag('span')

CHILD OF ELEMENT
────────────────

const elements = R.G.class('elementClassName', parentEl)

*/

R.G = {
    p: function (p) {
        return p ? p : document
    },

    id: function (el, p) {
        return this.p(p).getElementById(el)
    },

    class: function (el, p) {
        return this.p(p).getElementsByClassName(el)
    },

    tag: function (el, p) {
        return this.p(p).getElementsByTagName(el)
    }
}
