/*

──────────────────────────────────────────
──────────────────────────────────────────
SELECT
──────────────────────────────────────────
──────────────────────────────────────────

const el[0] = R.Select.el(selector)
const type = R.Select.type(selector)
const name = R.Select.name(selector)

*/

R.Select = {
    el: function (s) {
        var el = []
        if (R.Is.str(s)) {
            var elName = s.substring(1)
            if (s.charAt(0) === '#') {
                el[0] = R.G.id(elName)
            } else {
                el = R.G.class(elName)
            }
        } else {
            el[0] = s
        }
        return el
    },

    type: function (s) {
        return s.charAt(0) === '#' ? 'id' : 'class'
    },

    name: function (s) {
        return s.substring(1)
    }
}
